# Slide Groups: localStorage -> Enter Cloud (Supabase)

## Context
Currently slide groups (name, slide order) are stored in `localStorage`, causing:
- Every user sees different order (no shared state)
- Need to manually bump version + hardcode indices in code to sync
- AI can't read user's browser localStorage

## Approach: Supabase `slide_groups` Table

### Database
- Table `slide_groups` with columns: `id` (uuid PK), `name` (text), `slide_indices` (jsonb), `created_at`, `updated_at`
- Seed default rows on first load if table is empty
- No auth required (public read/write for simplicity)

### Edge Function: `slide-groups`
- `GET /slide-groups` — return all groups ordered by `created_at`
- `POST /slide-groups` — create new group
- `PUT /slide-groups/:id` — update name or slide_indices
- `DELETE /slide-groups/:id` — delete group

### Frontend: Refactor `useGroups.ts`
- Replace localStorage read/write with Supabase fetch/update
- Keep local React state for instant UI, sync to DB on change (optimistic updates)
- On mount: fetch from Supabase; if empty, seed defaults
- On every mutation (reorder, add, remove, rename, delete): PATCH to Supabase
- Debounce writes (300ms) to avoid excessive API calls during drag reorder
- Fallback to hardcoded defaults if DB fetch fails

### Files to Modify
1. **New**: `supabase/migrations/create_slide_groups.sql` — table creation + seed data
2. **New**: `supabase/functions/slide-groups/index.ts` — Edge Function CRUD
3. **Modify**: `src/hooks/useGroups.ts` — replace localStorage with Supabase calls
4. **No changes** to GroupEditor, Dashboard, or any slide components

### Verification
- Dashboard loads groups from DB (not localStorage)
- Reorder in GroupEditor → refresh → order persists
- Open in incognito → same order visible
- Create/delete group → reflected for all users
