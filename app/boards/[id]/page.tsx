"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import TodoList from "@/app/_components/TodoList";
import Button from "@/app/_components/Button";

import useBoardStore from "@/app/store/useBoardStore";

export default function Board() {
  const { boards, setBoards } = useBoardStore();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    //내부로 움직일 때
    if (source.droppableId === destination.droppableId) {
      const sourceBoardTodos = [...boards[source.droppableId]];
      const targetTodo = sourceBoardTodos[source.index];

      sourceBoardTodos.splice(source.index, 1);
      sourceBoardTodos.splice(destination.index, 0, targetTodo);

      setBoards({ ...boards, [source.droppableId]: sourceBoardTodos });
    }

    //외부로 움직일 때
    if (source.droppableId !== destination.droppableId) {
      const sourceBoardTodos = [...boards[source.droppableId]];
      const destinationBoardTodos = [...boards[destination.droppableId]];
      const targetTodo = sourceBoardTodos[source.index];

      sourceBoardTodos.splice(source.index, 1);
      destinationBoardTodos.splice(destination.index, 0, targetTodo);

      setBoards({
        ...boards,
        [source.droppableId]: sourceBoardTodos,
        [destination.droppableId]: destinationBoardTodos,
      });
    }
  };

  const onBoardAdd = () => {
    const newBoard = `Board${Object.keys(boards).length + 1}`;

    setBoards({ ...boards, [newBoard]: [] });
  };

  return (
    <>
      <Header />
      <div className="flex overflow-hidden h-[calc(100%-46px)]">
        <Sidebar />
        <div className="overflow-x-auto flex items-start h-full p-4">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(boards).map((boardId) => {
              return (
                <TodoList
                  key={boardId}
                  boardId={boardId}
                  toDos={boards[boardId]}
                />
              );
            })}
          </DragDropContext>

          <Button label="+ Add Another List" onClick={onBoardAdd} />
        </div>
      </div>
    </>
  );
}
