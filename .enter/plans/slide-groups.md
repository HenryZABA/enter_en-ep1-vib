# Slide Groups Feature Plan

## Context
User wants to add PowerPoint-like group management to the existing slide presentation system:
1. Thumbnail sidebar (like PPT's left panel) to browse/select/remove slides
2. Group functionality to organize slides into named collections (e.g., "分享会", "答辩", "4.16 workshop")
3. Dynamic group creation/deletion
4. Play button for each group (independent playback)

**Decisions:**
- "Delete" = remove from current group (not permanent)
- Data stored in localStorage
- New Dashboard page as home

---

## Architecture

### Data Model
```typescript
interface SlideGroup {
  id: string;       // uuid
  name: string;     // e.g., "分享会"
  slideIndices: number[]; // indices into master `slides` array
}
```

### Routes
| Path | Page | Description |
|------|------|-------------|
| `/` | Dashboard | Group cards overview, create/delete groups |
| `/group/:groupId` | GroupEditor | Sidebar + preview + add/remove slides |
| `/group/:groupId/play/:slideIndex` | GroupPlayer | Presentation mode for group |
| `/slide/:id` | SlideContainer | Keep existing (all slides) |

---

## New Files

### 1. `src/hooks/useGroups.ts` — Group state management
- CRUD operations for groups (create, read, update, delete)
- Add/remove slides from a group
- Reorder slides within a group
- Persist to localStorage under key `slide-groups`
- Pre-populate with 3 default groups on first load:
  - "分享会" → all slides
  - "答辩" → all slides
  - "4.16 Workshop" → all slides

### 2. `src/pages/Dashboard.tsx` — Group management home page
- Grid of group cards showing: name, slide count, thumbnail preview of first slide
- "Create Group" button → dialog with name input
- Each card has: Play button, Edit button, Delete button
- Clicking card → navigates to `/group/:groupId`

### 3. `src/pages/GroupEditor.tsx` — Group editor with sidebar
- **Left sidebar (w-64)**: Scrollable vertical list of slide thumbnails in the group
  - Each thumbnail: slide number, title, aspect-ratio card
  - Click to select (highlight current)
  - X button to remove from group
  - Drag to reorder (optional, can skip for v1)
- **Main area**: Preview of selected slide (rendered at scale)
- **Top bar**: Group name (editable), "Add Slides" button, "Play" button, "Back" link
- **Add Slides Dialog**: Grid of all master slides with checkboxes, toggle to add/remove

### 4. `src/pages/GroupPlayer.tsx` — Presentation mode
- Reuses the SlideContainer logic but operates on filtered slides from the group
- Full-screen presentation with the same keyboard/touch/click navigation
- Progress bar reflects group slides only
- ESC or back button returns to group editor

---

## Modified Files

### 5. `src/router.tsx`
- Change `/` from redirect to `<Dashboard />`
- Add `/group/:groupId` → `<GroupEditor />`
- Add `/group/:groupId/play/:slideIndex` → `<GroupPlayer />`
- Keep `/slide/:id` → `<SlideContainer />`

### 6. `src/components/slides/index.ts`
- No changes needed (already exports everything)

### 7. `src/pages/slides/slideConfig.ts`
- No changes needed (master slide list stays intact)

---

## Component Reuse
- Reuse existing `ScrollArea` for sidebar scrolling
- Reuse existing `Dialog` for create group / add slides dialogs
- Reuse existing `Button`, `Card` from shadcn
- Reuse `SlideHeader`, `SlideProgress`, `SlideNavigation`, `SlidePageIndicator` in GroupPlayer
- Reuse `slides`, `slideTitles`, `sectionNames` from slideConfig

## Icons (lucide-react)
- `Plus` for create group
- `Play` for play button
- `X` for remove slide
- `Pencil` for edit group name
- `Trash2` for delete group
- `ArrowLeft` for back navigation
- `LayoutGrid` for add slides

---

## Verification
1. Visit `/` → see Dashboard with 3 default groups
2. Click "Create Group" → new group appears
3. Click a group card → enter GroupEditor with sidebar
4. Click "Add Slides" → dialog shows all slides, can toggle
5. Click X on sidebar thumbnail → removes from group
6. Click "Play" → enters full-screen presentation, only group's slides
7. Navigate with keyboard/click/swipe → works correctly within group
8. Refresh page → groups persist in localStorage
