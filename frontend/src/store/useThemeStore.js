import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("NovaChat-Theme") || "synthwave",
  setTheme: (theme) => {
    localStorage.setItem("NovaChat-Theme", theme);
    set({ theme });
  },
}));
