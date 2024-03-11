"use client";

import { Droppable } from "react-beautiful-dnd";
import Button from "./Button";
import TodoItem from "./TodoItem";

import useBoardStore, { Todo } from "../store/useBoardStore";

type TodoListProps = {
  boardId: string;
  toDos: Todo[];
};

export default function TodoList({ boardId, toDos }: TodoListProps) {
  const { boards, setBoards } = useBoardStore();

  const hanldeItemAdd = () => {
    const id = Date.now();
    const text = prompt("텍스트를 입력하세요.");

    if (!text) return;

    const sourceBoardTodos = [...boards[boardId]];

    setBoards({
      ...boards,
      [boardId]: [...sourceBoardTodos, { id, text }],
    });
  };

  return (
    <div className="border-solid border-2 bg-gray-100 mx-2 min-w-[270px] rounded-lg p-4 max-h-full flex flex-col">
      <h3 className="font-semibold mb-4">{boardId}</h3>
      <Droppable droppableId={boardId}>
        {(provided) => {
          return (
            <ul
              className="overflow-y-scroll min-h-[20px]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {toDos.map((toDo, index) => {
                return <TodoItem key={toDo.id} toDo={toDo} index={index} />;
              })}

              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
      <Button
        label="+ Add a card"
        hasBorder={false}
        bgColor="transparent"
        onClick={hanldeItemAdd}
      />
    </div>
  );
}
