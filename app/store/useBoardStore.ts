import { create } from "zustand";

export type Todo = {
  id: number;
  text: string;
};

type Lists = {
  [key: string]: Todo[];
};

type BoardStore = {
  board: Lists;
  setBoard: (newLists: Lists) => void;
};

const useBoardStore = create<BoardStore>((set) => ({
  board: {
    List1: [
      { id: 123, text: "hello" },
      { id: 345, text: "hi" },
    ],
    List2: [{ id: 128, text: "bye" }],
    List3: [],
  },
  setBoard: (newLists) => set({ board: { ...newLists } }),
}));

export default useBoardStore;
