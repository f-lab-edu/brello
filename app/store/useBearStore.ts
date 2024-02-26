import { create } from "zustand";

type BearStore = {
  bears: number;
  increaseBear: () => void;
  removeAllBears: () => void;
};

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increaseBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearStore;
