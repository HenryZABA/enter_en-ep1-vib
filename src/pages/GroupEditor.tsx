import { useState, useMemo, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "@/hooks/useGroups";
import { slides, slideTitles, sectionNames } from "@/pages/slides/slideConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowLeft, Play, Plus, X, Check, GripVertical } from "lucide-react";

export default function GroupEditor() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const { getGroup, renameGroup, addSlide, removeSlide, reorderSlides, insertSlides } = useGroups();
  const group = getGroup(groupId || "");

  const [selectedPosition, setSelectedPosition] = useState(0);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [insertDialogOpen, setInsertDialogOpen] = useState(false);
  const [insertAfterPosition, setInsertAfterPosition] = useState(0);
  const [insertSelected, setInsertSelected] = useState<number[]>([]);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState("");

  // Drag state
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dropTarget, setDropTarget] = useState<number | null>(null);
  const dragCounter = useRef(0);

  const groupSlideSet = useMemo(
    () => new Set(group?.slideIndices ?? []),
    [group?.slideIndices]
  );

  const handleDragStart = useCallback((e: React.DragEvent, position: number) => {
    setDragIndex(position);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(position));
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, position: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDropTarget(position);
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
  }, []);

  const handleDragLeave = useCallback(() => {
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDropTarget(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, targetPosition: number) => {
      e.preventDefault();
      dragCounter.current = 0;
      if (dragIndex === null || !group) return;

      const newIndices = [...group.slideIndices];
      const [moved] = newIndices.splice(dragIndex, 1);
      newIndices.splice(
        targetPosition > dragIndex ? targetPosition - 1 : targetPosition,
        0,
        moved
      );

      reorderSlides(group.id, newIndices);
      setSelectedPosition(
        targetPosition > dragIndex ? targetPosition - 1 : targetPosition
      );
      setDragIndex(null);
      setDropTarget(null);
    },
    [dragIndex, group, reorderSlides]
  );

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDropTarget(null);
    dragCounter.current = 0;
  }, []);

  if (!group) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Group not found</p>
          <Button onClick={() => navigate("/")}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  const safePosition = Math.min(
    selectedPosition,
    Math.max(0, group.slideIndices.length - 1)
  );
  const currentMasterIndex = group.slideIndices[safePosition];
  const CurrentSlide =
    currentMasterIndex !== undefined ? slides[currentMasterIndex] : null;

  const handleRemove = (position: number) => {
    removeSlide(group.id, position);
    if (safePosition >= group.slideIndices.length - 1 && safePosition > 0) {
      setSelectedPosition(safePosition - 1);
    }
  };

  const handleStartEditName = () => {
    setEditName(group.name);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    if (editName.trim()) {
      renameGroup(group.id, editName.trim());
    }
    setIsEditingName(false);
  };

  const handleToggleSlide = (masterIndex: number) => {
    if (groupSlideSet.has(masterIndex)) {
      const pos = group.slideIndices.indexOf(masterIndex);
      if (pos !== -1) removeSlide(group.id, pos);
    } else {
      addSlide(group.id, masterIndex);
    }
  };

  const openInsertDialog = (afterPosition: number) => {
    setInsertAfterPosition(afterPosition);
    setInsertSelected([]);
    setInsertDialogOpen(true);
  };

  const toggleInsertSlide = (masterIndex: number) => {
    setInsertSelected((prev) =>
      prev.includes(masterIndex)
        ? prev.filter((i) => i !== masterIndex)
        : [...prev, masterIndex]
    );
  };

  const handleInsertConfirm = () => {
    if (insertSelected.length > 0) {
      insertSlides(group.id, insertAfterPosition, insertSelected);
      setSelectedPosition(insertAfterPosition + 1);
    }
    setInsertDialogOpen(false);
    setInsertSelected([]);
  };

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="shrink-0 border-b px-4 py-3 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>

        {isEditingName ? (
          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleSaveName}
            onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
            className="w-48 h-8 text-sm font-semibold"
            autoFocus
          />
        ) : (
          <button
            onClick={handleStartEditName}
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            {group.name}
          </button>
        )}

        <span className="text-sm text-muted-foreground">
          {group.slideIndices.length} slides
        </span>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setAddDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-1.5" />
            Add Slides
          </Button>
          <Button
            size="sm"
            disabled={group.slideIndices.length === 0}
            onClick={() => navigate(`/group/${group.id}/play/1`)}
          >
            <Play className="h-4 w-4 mr-1.5" />
            Play
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex min-h-0">
        {/* Left Sidebar - Thumbnail List */}
        <div className="w-56 lg:w-72 border-r bg-secondary/20 shrink-0 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1">
              {group.slideIndices.length === 0 ? (
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">No slides yet</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => setAddDialogOpen(true)}
                  >
                    <Plus className="h-3.5 w-3.5 mr-1" />
                    Add Slides
                  </Button>
                </div>
              ) : (
                group.slideIndices.map((masterIdx, position) => {
                  const SlideComp = slides[masterIdx];
                  return (
                    <div
                      key={`${position}-${masterIdx}`}
                      draggable
                      onDragStart={(e) => handleDragStart(e, position)}
                      onDragOver={(e) => handleDragOver(e, position)}
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, position)}
                      onDragEnd={handleDragEnd}
                      className={cn(
                        "group relative flex items-start gap-2 p-1.5 rounded-md cursor-pointer transition-all",
                        position === safePosition
                          ? "bg-primary/10 ring-1 ring-primary/30"
                          : "hover:bg-secondary/50",
                        dragIndex === position && "opacity-40",
                        dropTarget === position &&
                          dragIndex !== position &&
                          "border-t-2 border-primary"
                      )}
                      onClick={() => setSelectedPosition(position)}
                    >
                      {/* Drag handle + slide number */}
                      <div className="flex flex-col items-center shrink-0 gap-0.5 mt-1">
                        <GripVertical className="h-3 w-3 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                        <span className="text-[10px] text-muted-foreground w-4 text-center">
                          {position + 1}
                        </span>
                      </div>

                      {/* Rendered thumbnail */}
                      <div
                        className={cn(
                          "flex-1 aspect-video rounded border overflow-hidden relative",
                          position === safePosition
                            ? "border-primary"
                            : "border-border"
                        )}
                      >
                        <div
                          className="absolute top-0 left-0 w-[1920px] h-[1080px] origin-top-left pointer-events-none bg-background"
                          style={{
                            transform: "scale(0.094)",
                          }}
                        >
                          <SlideComp />
                        </div>
                      </div>

                      {/* Insert button (top-left) */}
                      <button
                        className="absolute top-0.5 left-7 opacity-0 group-hover:opacity-100 transition-opacity rounded-full p-0.5 bg-primary/90 hover:bg-primary text-primary-foreground z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          openInsertDialog(position);
                        }}
                        title="Insert slides after this"
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      {/* Remove button (top-right) */}
                      <button
                        className="absolute top-0.5 right-0.5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full p-0.5 bg-destructive hover:bg-destructive/80 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(position);
                        }}
                      >
                        <X className="h-3 w-3 text-white" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Main Preview Area */}
        <div className="flex-1 flex items-center justify-center bg-secondary/10 p-4 overflow-hidden">
          {CurrentSlide ? (
            <div className="w-full max-w-4xl aspect-video bg-background rounded-lg border shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 transform scale-[0.5] origin-top-left w-[200%] h-[200%]">
                <CurrentSlide />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg text-muted-foreground">No slide selected</p>
              <p className="text-sm text-muted-foreground mt-1">
                Add slides to get started
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Slides Dialog (toggle mode) */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Add Slides</DialogTitle>
            <DialogDescription>
              Click slides to add or remove them from this group.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 py-2">
              {slides.map((SlideComp, masterIdx) => {
                const isInGroup = groupSlideSet.has(masterIdx);
                return (
                  <button
                    key={masterIdx}
                    onClick={() => handleToggleSlide(masterIdx)}
                    className={cn(
                      "relative aspect-video rounded-lg border-2 overflow-hidden transition-all hover:scale-105",
                      isInGroup
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="absolute top-0 left-0 w-[1920px] h-[1080px] origin-top-left pointer-events-none bg-background" style={{ transform: "scale(0.08)" }}>
                      <SlideComp />
                    </div>
                    {/* Overlay info */}
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 px-1 py-0.5 text-[9px] line-clamp-1",
                      isInGroup ? "bg-primary/80 text-primary-foreground" : "bg-background/80 text-muted-foreground"
                    )}>
                      {masterIdx + 1}. {slideTitles[masterIdx]}
                    </div>
                    {isInGroup && (
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-2.5 w-2.5 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Insert Slides Dialog */}
      <Dialog open={insertDialogOpen} onOpenChange={setInsertDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Insert Slides</DialogTitle>
            <DialogDescription>
              Select slides to insert after position {insertAfterPosition + 1}. You can select multiple.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 py-2">
              {slides.map((SlideComp, masterIdx) => {
                const isSelected = insertSelected.includes(masterIdx);
                return (
                  <button
                    key={masterIdx}
                    onClick={() => toggleInsertSlide(masterIdx)}
                    className={cn(
                      "relative aspect-video rounded-lg border-2 overflow-hidden transition-all hover:scale-105",
                      isSelected
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="absolute top-0 left-0 w-[1920px] h-[1080px] origin-top-left pointer-events-none bg-background" style={{ transform: "scale(0.08)" }}>
                      <SlideComp />
                    </div>
                    <div className={cn(
                      "absolute bottom-0 left-0 right-0 px-1 py-0.5 text-[9px] line-clamp-1",
                      isSelected ? "bg-primary/80 text-primary-foreground" : "bg-background/80 text-muted-foreground"
                    )}>
                      {masterIdx + 1}. {slideTitles[masterIdx]}
                    </div>
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-2.5 w-2.5 text-primary-foreground" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setInsertDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleInsertConfirm}
              disabled={insertSelected.length === 0}
            >
              Insert {insertSelected.length > 0 ? `(${insertSelected.length})` : ""}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
