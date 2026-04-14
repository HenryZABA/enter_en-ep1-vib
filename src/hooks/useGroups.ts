import { useState, useCallback, useEffect } from "react";

export interface SlideGroup {
  id: string;
  name: string;
  slideIndices: number[];
}

const STORAGE_KEY = "slide-groups";
const VERSION_KEY = "slide-groups-version";
const CURRENT_VERSION = 18; // bump this when defaults change

function generateId(): string {
  return crypto.randomUUID();
}

function getDefaultGroups(): SlideGroup[] {
  const originalIndices = Array.from({ length: 26 }, (_, i) => i);
  const vcIndices = Array.from({ length: 15 }, (_, i) => i + 26);
  const dbIndices = [41,42,43,50,46,45,51,49,52,29,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68];
  return [
    { id: generateId(), name: "分享会", slideIndices: [...vcIndices] },
    { id: generateId(), name: "答辩", slideIndices: [...dbIndices] },
    { id: generateId(), name: "4.16 Workshop", slideIndices: [...originalIndices] },
  ];
}

function loadGroups(): SlideGroup[] {
  try {
    const savedVersion = Number(localStorage.getItem(VERSION_KEY) || "0");
    if (savedVersion >= CURRENT_VERSION) {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SlideGroup[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch {
    // ignore
  }
  const defaults = getDefaultGroups();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
  localStorage.setItem(VERSION_KEY, String(CURRENT_VERSION));
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
