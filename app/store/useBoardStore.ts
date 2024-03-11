import { create } from "zustand";

export type Todo = {
  id: number;
  text: string;
};

type Boards = {
  [key: string]: Todo[];
};

type BoardStore = {
  boards: Boards;
  setBoards: (newBoards: Boards) => void;
};

const useBoardStore = create<BoardStore>((set) => ({
  boards: {
    Board1: [
      { id: 123, text: "hello" },
      { id: 345, text: "hi" },
    ],
    Board2: [{ id: 128, text: "bye" }],
    Board3: [],
  },
  setBoards: (newBoards) => set({ boards: { ...newBoards } }),
}));

export default useBoardStore;
