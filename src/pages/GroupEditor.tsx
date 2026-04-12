import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGroups } from "@/hooks/useGroups";
import { slides, slideTitles } from "@/pages/slides/slideConfig";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ArrowLeft, Play, Plus, X, Check } from "lucide-react";

export default function GroupEditor() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const { getGroup, renameGroup, addSlide, removeSlide } = useGroups();
  const group = getGroup(groupId || "");

  const [selectedPosition, setSelectedPosition] = useState(0);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState("");

  // Get current group's slide indices set for quick lookup
  const groupSlideSet = useMemo(
    () => new Set(group?.slideIndices ?? []),
    [group?.slideIndices]
  );

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
      // Find position(s) of this master index and remove the first one
      const pos = group.slideIndices.indexOf(masterIndex);
      if (pos !== -1) removeSlide(group.id, pos);
    } else {
      addSlide(group.id, masterIndex);
    }
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
        <div className="w-52 lg:w-64 border-r bg-secondary/20 shrink-0 flex flex-col">
          <ScrollArea className="flex-1">
            <div className="p-2 space-y-1.5">
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
                group.slideIndices.map((masterIdx, position) => (
                  <div
                    key={`${position}-${masterIdx}`}
                    className={cn(
                      "group relative flex items-start gap-2 p-1.5 rounded-md cursor-pointer transition-colors",
                      position === safePosition
                        ? "bg-primary/10 ring-1 ring-primary/30"
                        : "hover:bg-secondary/50"
                    )}
                    onClick={() => setSelectedPosition(position)}
                  >
                    {/* Slide number */}
                    <span className="text-[10px] text-muted-foreground w-4 shrink-0 text-right mt-1">
                      {position + 1}
                    </span>

                    {/* Thumbnail card */}
                    <div
                      className={cn(
                        "flex-1 aspect-video rounded border overflow-hidden flex flex-col items-center justify-center p-1.5 text-center",
                        position === safePosition
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background"
                      )}
                    >
                      <span
                        className={cn(
                          "text-sm font-bold",
                          position === safePosition
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {masterIdx + 1}
                      </span>
                      <span className="text-[9px] text-muted-foreground line-clamp-2 mt-0.5 leading-tight">
                        {slideTitles[masterIdx]}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-full p-0.5 hover:bg-destructive/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(position);
                      }}
                    >
                      <X className="h-3 w-3 text-destructive" />
                    </button>
                  </div>
                ))
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
              <p className="text-lg text-muted-foreground">
                No slide selected
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Add slides to get started
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add Slides Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Add Slides</DialogTitle>
            <DialogDescription>
              Click slides to add or remove them from this group.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 py-2">
              {slides.map((_, masterIdx) => {
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
                    <div
                      className={cn(
                        "absolute inset-0 flex flex-col items-center justify-center p-2 text-center",
                        isInGroup
                          ? "bg-primary/10"
                          : "bg-secondary/30 hover:bg-secondary/50"
                      )}
                    >
                      <span
                        className={cn(
                          "text-lg font-bold",
                          isInGroup ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {masterIdx + 1}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] line-clamp-2 mt-0.5",
                          isInGroup ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {slideTitles[masterIdx]}
                      </span>
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
    </div>
  );
}
