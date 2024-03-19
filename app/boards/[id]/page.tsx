"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import TodoList from "@/app/_components/TodoList";
import Button from "@/app/_components/Button";

import useBoardStore from "@/app/store/useBoardStore";

export default function Board() {
  const { board, setBoard } = useBoardStore();

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    //내부로 움직일 때
    if (source.droppableId === destination.droppableId) {
      const sourceListTodos = [...board[source.droppableId]];
      const targetTodo = sourceListTodos[source.index];

      sourceListTodos.splice(source.index, 1);
      sourceListTodos.splice(destination.index, 0, targetTodo);

      setBoard({ ...board, [source.droppableId]: sourceListTodos });
    }

    //외부로 움직일 때
    if (source.droppableId !== destination.droppableId) {
      const sourceListTodos = [...board[source.droppableId]];
      const destinationListTodos = [...board[destination.droppableId]];
      const targetTodo = sourceListTodos[source.index];

      sourceListTodos.splice(source.index, 1);
      destinationListTodos.splice(destination.index, 0, targetTodo);

      setBoard({
        ...board,
        [source.droppableId]: sourceListTodos,
        [destination.droppableId]: destinationListTodos,
      });
    }
  };

  const onBoardAdd = () => {
    const newList = `List${Object.keys(board).length + 1}`;

    setBoard({ ...board, [newList]: [] });
  };

  return (
    <>
      <Header />
      <div className="flex overflow-hidden h-[calc(100%-46px)]">
        <Sidebar />
        <div className="overflow-x-auto flex items-start h-full p-4">
          <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(board).map((listId) => {
              return (
                <TodoList key={listId} listId={listId} toDos={board[listId]} />
              );
            })}
          </DragDropContext>

          <Button label="+ Add Another List" onClick={onBoardAdd} />
        </div>
      </div>
    </>
  );
}
