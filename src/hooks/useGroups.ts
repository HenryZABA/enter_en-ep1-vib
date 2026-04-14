import { useState, useCallback, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SlideGroup {
  id: string;
  name: string;
  slideIndices: number[];
}

function toGroup(row: { id: string; name: string; slide_indices: unknown }): SlideGroup {
  return {
    id: row.id,
    name: row.name,
    slideIndices: Array.isArray(row.slide_indices) ? (row.slide_indices as number[]) : [],
  };
}

export function useGroups() {
  const [groups, setGroups] = useState<SlideGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch from DB on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("slide_groups")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!cancelled) {
        if (!error && data && data.length > 0) {
          setGroups(data.map(toGroup));
        }
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Debounced persist — batch-update all groups
  const persistAll = useCallback((updated: SlideGroup[]) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      for (let i = 0; i < updated.length; i++) {
        const g = updated[i];
        await supabase
          .from("slide_groups")
          .update({
            slide_indices: g.slideIndices as unknown as undefined,
            sort_order: i,
            name: g.name,
          })
          .eq("id", g.id);
      }
    }, 300);
  }, []);

  const createGroup = useCallback(
    async (name: string): Promise<SlideGroup | null> => {
      const { data, error } = await supabase
        .from("slide_groups")
        .insert({ name, slide_indices: [] as unknown as undefined, sort_order: 999 })
        .select()
        .single();
      if (error || !data) return null;
      const newGroup = toGroup(data);
      setGroups((prev) => [...prev, newGroup]);
      return newGroup;
    },
    []
  );

  const deleteGroup = useCallback(
    async (groupId: string) => {
      await supabase.from("slide_groups").delete().eq("id", groupId);
      setGroups((prev) => {
        const next = prev.filter((g) => g.id !== groupId);
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const renameGroup = useCallback(
    (groupId: string, name: string) => {
      setGroups((prev) => {
        const next = prev.map((g) => (g.id === groupId ? { ...g, name } : g));
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const addSlide = useCallback(
    (groupId: string, slideIndex: number) => {
      setGroups((prev) => {
        const next = prev.map((g) =>
          g.id === groupId && !g.slideIndices.includes(slideIndex)
            ? { ...g, slideIndices: [...g.slideIndices, slideIndex] }
            : g
        );
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const removeSlide = useCallback(
    (groupId: string, position: number) => {
      setGroups((prev) => {
        const next = prev.map((g) =>
          g.id === groupId
            ? { ...g, slideIndices: g.slideIndices.filter((_, i) => i !== position) }
            : g
        );
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const reorderSlides = useCallback(
    (groupId: string, newIndices: number[]) => {
      setGroups((prev) => {
        const next = prev.map((g) =>
          g.id === groupId ? { ...g, slideIndices: newIndices } : g
        );
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const insertSlides = useCallback(
    (groupId: string, afterPosition: number, slideIndices: number[]) => {
      setGroups((prev) => {
        const next = prev.map((g) => {
          if (g.id !== groupId) return g;
          const newArr = [...g.slideIndices];
          newArr.splice(afterPosition + 1, 0, ...slideIndices);
          return { ...g, slideIndices: newArr };
        });
        persistAll(next);
        return next;
      });
    },
    [persistAll]
  );

  const getGroup = useCallback(
    (groupId: string) => groups.find((g) => g.id === groupId),
    [groups]
  );

  return {
    groups,
    loading,
    createGroup,
    deleteGroup,
    renameGroup,
    addSlide,
    removeSlide,
    reorderSlides,
    insertSlides,
    getGroup,
  };
}
