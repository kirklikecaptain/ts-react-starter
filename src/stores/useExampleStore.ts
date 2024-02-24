import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ExampleStore {
  queryCount: number;
  increment: (by: number) => void;
}

export const useExampleStore = create<ExampleStore>()(
  devtools(
    persist(
      (set) => ({
        queryCount: 0,
        increment: () => set((state) => ({ queryCount: state.queryCount + 1 })),
      }),
      { name: "example-store" },
    ),
  ),
);
