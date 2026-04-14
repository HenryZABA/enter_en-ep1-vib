import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGroups } from "@/hooks/useGroups";
import { slides, slideTitles, sectionNames } from "@/pages/slides/slideConfig";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Play, Pencil, Trash2, Layers, Library, Eye } from "lucide-react";
import { SlideThumbnail } from "@/components/slides/SlideThumbnail";

export default function Dashboard() {
  const navigate = useNavigate();
  const { groups, loading, createGroup, deleteGroup } = useGroups();
  const [createOpen, setCreateOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleCreate = async () => {
    if (newName.trim()) {
      const group = await createGroup(newName.trim());
      setNewName("");
      setCreateOpen(false);
      if (group) navigate(`/group/${group.id}`);
    }
  };

  const handleDelete = () => {
    if (deleteTarget) {
      deleteGroup(deleteTarget);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="h-screen w-full bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="shrink-0 border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Layers className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold tracking-tight">Slide Groups</h1>
        </div>
        <Button onClick={() => setCreateOpen(true)} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New Group
        </Button>
      </div>

      {/* Group Cards */}
      <ScrollArea className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-sm text-muted-foreground">Loading...</p>
          </div>
        ) : (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {groups.map((group) => {
            const firstTitle =
              group.slideIndices.length > 0
                ? slideTitles[group.slideIndices[0]] || "Untitled"
                : "No slides";
            return (
              <Card
                key={group.id}
                className="group cursor-pointer hover:border-primary/50 transition-colors"
                onClick={() => navigate(`/group/${group.id}`)}
              >
                {/* Thumbnail preview area */}
                <div className="aspect-video bg-secondary/30 border-b flex items-center justify-center rounded-t-lg">
                  {group.slideIndices.length > 0 ? (
                    <div className="text-center px-4">
                      <p className="text-3xl font-bold text-muted-foreground/50">
                        {group.slideIndices.length}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                        {firstTitle}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Empty</p>
                  )}
                </div>

                <CardHeader className="pb-2 pt-3 px-4">
                  <CardTitle className="text-base">{group.name}</CardTitle>
                  <CardDescription>
                    {group.slideIndices.length} slides
                  </CardDescription>
                </CardHeader>

                <CardFooter className="px-4 pb-3 pt-0 gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    disabled={group.slideIndices.length === 0}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/group/${group.id}/play/1`);
                    }}
                  >
                    <Play className="h-3.5 w-3.5 mr-1.5" />
                    Play
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/group/${group.id}`);
                    }}
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteTarget(group.id);
                    }}
                  >
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}

          {/* Create new card */}
          <Card
            className="cursor-pointer border-dashed hover:border-primary/50 transition-colors flex flex-col items-center justify-center min-h-[200px]"
            onClick={() => setCreateOpen(true)}
          >
            <Plus className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Create New Group</p>
          </Card>
        </div>
        )}

        {/* Slide Library */}
        <div className="px-6 pb-6 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Library className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold tracking-tight">Slide Library</h2>
            <span className="text-sm text-muted-foreground">({slides.length} slides)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {slides.map((SlideComponent, index) => {
              const section = sectionNames[index];
              return (
                <div
                  key={index}
                  className="group relative border rounded-lg overflow-hidden bg-secondary/20 hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => setPreviewIndex(index)}
                >
                  {/* Miniature slide preview */}
                  <div className="relative">
                    <SlideThumbnail Component={SlideComponent} />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="px-2 py-1.5">
                    <p className="text-xs font-medium line-clamp-1">
                      {index + 1}. {slideTitles[index] || "Untitled"}
                    </p>
                    {section && (
                      <p className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                        {section}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>

      {/* Create Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Group</DialogTitle>
            <DialogDescription>
              Give your slide group a name.
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Group name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            autoFocus
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setCreateOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreate} disabled={!newName.trim()}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Group</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this group? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Slide Preview Dialog */}
      <Dialog
        open={previewIndex !== null}
        onOpenChange={(open) => !open && setPreviewIndex(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle>
              Slide {previewIndex !== null ? previewIndex + 1 : ""}: {previewIndex !== null ? slideTitles[previewIndex] : ""}
            </DialogTitle>
            <DialogDescription>
              {previewIndex !== null && sectionNames[previewIndex]
                ? sectionNames[previewIndex]
                : "Preview"}
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6">
            <div className="border rounded-lg overflow-hidden bg-background">
              {previewIndex !== null && (() => {
                const SlideComp = slides[previewIndex];
                return <SlideThumbnail Component={SlideComp} />;
              })()}
            </div>
            <div className="flex items-center justify-between mt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={previewIndex === 0}
                onClick={() => setPreviewIndex((prev) => prev !== null ? prev - 1 : null)}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                {previewIndex !== null ? previewIndex + 1 : 0} / {slides.length}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={previewIndex === slides.length - 1}
                onClick={() => setPreviewIndex((prev) => prev !== null ? prev + 1 : null)}
              >
                Next
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
