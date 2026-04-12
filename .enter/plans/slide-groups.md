# Fix: Sidebar Thumbnail Height Bug

## Context
The sidebar slide thumbnails in GroupEditor are rendering at full 1080px height because the inner `div` (1920x1080) is not properly clipped. The outer container uses `aspect-video` but doesn't constrain the actual height of the oversized inner content.

## Fix
In `src/pages/GroupEditor.tsx`, the thumbnail wrapper needs a **fixed explicit height** and `overflow-hidden` so the scaled-down 1920x1080 inner div doesn't expand the parent.

**Change**: Wrap the rendered slide in a container with explicit `w-full aspect-video` and `overflow-hidden`, and dynamically calculate the scale factor based on the actual thumbnail width (~180px for w-56 sidebar).

The key fix: The outer aspect-video div must be `relative` with `overflow-hidden`, and the inner 1920x1080 div must be `absolute` positioned so it doesn't affect the parent's layout height.

## File
- `src/pages/GroupEditor.tsx` — fix the thumbnail rendering container
