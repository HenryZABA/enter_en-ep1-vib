# Plan: Enhance Group Editor Sidebar

## Context
User wants 3 improvements to the GroupEditor left sidebar:
1. **Rendered thumbnails** - Like Dashboard's Slide Library, show actual slide component rendered as miniature previews
2. **Insert button** - "+" button on top-left of each card, opens picker to insert slide(s) after that position
3. **Drag-and-drop reordering** - Drag to reorder slides in the sidebar

## Approach

### 1. Add `insertSlides` to `useGroups` hook
- New function: `insertSlides(groupId, afterPosition, slideIndices[])` inserts one or more slides after a given position
- File: `src/hooks/useGroups.ts`

### 2. Rewrite GroupEditor sidebar thumbnails
- Replace text-only thumbnails with rendered slide components (same pattern as Dashboard Slide Library)
- Use `<SlideComponent />` inside a scaled-down container with `pointer-events-none`
- File: `src/pages/GroupEditor.tsx`

### 3. Add "+" insert button on each card
- Top-left corner "+" button, visible on hover
- Opens an insert dialog showing all slides as rendered previews with checkboxes
- Multi-select support, then insert all selected after the target position
- File: `src/pages/GroupEditor.tsx`

### 4. Drag-and-drop reordering
- Use HTML5 native drag & drop API (no extra dependencies)
- Each sidebar card gets `draggable` attribute
- Visual feedback: drop indicator line between cards
- On drop, call `reorderSlides()` from useGroups hook
- File: `src/pages/GroupEditor.tsx`

## Files Modified
- `src/hooks/useGroups.ts` - Add `insertSlides` function
- `src/pages/GroupEditor.tsx` - Major rewrite of sidebar section

## Verification
- Sidebar shows rendered slide previews (not just text)
- "+" button on each card opens insert dialog
- Can select multiple slides in insert dialog
- Selected slides are inserted after target position
- Can drag and drop to reorder slides
- Delete (X) button still works
- Lint passes
