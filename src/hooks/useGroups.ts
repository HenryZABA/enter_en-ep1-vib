import { useState, useCallback, useEffect } from "react";
import { slides } from "@/pages/slides/slideConfig";

export interface SlideGroup {
  id: string;
  name: string;
  slideIndices: number[];
}

const STORAGE_KEY = "slide-groups";

function generateId(): string {
  return crypto.randomUUID();
}

function getDefaultGroups(): SlideGroup[] {
  const allIndices = slides.map((_, i) => i);
  return [
    { id: generateId(), name: "分享会", slideIndices: [...allIndices] },
    { id: generateId(), name: "答辩", slideIndices: [...allIndices] },
    { id: generateId(), name: "4.16 Workshop", slideIndices: [...allIndices] },
  ];
}

function loadGroups(): SlideGroup[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as SlideGroup[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  const defaults = getDefaultGroups();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
  return defaults;
}

function saveGroups(groups: SlideGroup[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
}

export function useGroups() {
  const [groups, setGroups] = useState<SlideGroup[]>(loadGroups);

  useEffect(() => {
    saveGroups(groups);
  }, [groups]);

  const createGroup = useCallback((name: string) => {
    const newGroup: SlideGroup = { id: generateId(), name, slideIndices: [] };
    setGroups((prev) => [...prev, newGroup]);
    return newGroup;
  }, []);

  const deleteGroup = useCallback((groupId: string) => {
    setGroups((prev) => prev.filter((g) => g.id !== groupId));
  }, []);

  const renameGroup = useCallback((groupId: string, name: string) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === groupId ? { ...g, name } : g))
    );
  }, []);

  const addSlide = useCallback((groupId: string, slideIndex: number) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId && !g.slideIndices.includes(slideIndex)
          ? { ...g, slideIndices: [...g.slideIndices, slideIndex] }
          : g
      )
    );
  }, []);

  const removeSlide = useCallback((groupId: string, position: number) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? { ...g, slideIndices: g.slideIndices.filter((_, i) => i !== position) }
          : g
      )
    );
  }, []);

  const reorderSlides = useCallback(
    (groupId: string, newIndices: number[]) => {
      setGroups((prev) =>
        prev.map((g) =>
          g.id === groupId ? { ...g, slideIndices: newIndices } : g
        )
      );
    },
    []
  );

  const insertSlides = useCallback(
    (groupId: string, afterPosition: number, slideIndices: number[]) => {
      setGroups((prev) =>
        prev.map((g) => {
          if (g.id !== groupId) return g;
          const newArr = [...g.slideIndices];
          newArr.splice(afterPosition + 1, 0, ...slideIndices);
          return { ...g, slideIndices: newArr };
        })
      );
    },
    []
  );

  const getGroup = useCallback(
    (groupId: string) => groups.find((g) => g.id === groupId),
    [groups]
  );

  return {
    groups,
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
