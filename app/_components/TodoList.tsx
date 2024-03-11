"use client";

import { Droppable } from "react-beautiful-dnd";
import Button from "./Button";
import TodoItem from "./TodoItem";

import useBoardStore, { Todo } from "../store/useBoardStore";

type TodoListProps = {
  listId: string;
  toDos: Todo[];
};

export default function TodoList({ listId, toDos }: TodoListProps) {
  const { board, setBoard } = useBoardStore();

  const hanldeItemAdd = () => {
    const id = Date.now();
    const text = prompt("텍스트를 입력하세요.");

    if (!text) return;

    const sourceListTodos = [...board[listId]];

    setBoard({
      ...board,
      [listId]: [...sourceListTodos, { id, text }],
    });
  };

  return (
    <div className="border-solid border-2 bg-gray-100 mx-2 min-w-[270px] rounded-lg p-4 max-h-full flex flex-col">
      <h3 className="font-semibold mb-4">{listId}</h3>
      <Droppable droppableId={listId}>
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
