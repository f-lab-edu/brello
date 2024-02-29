"use client";

import CreateTodoListBtn from "@/app/_components/CreateTodoListBtn";
import TodoList from "@/app/_components/TodoList";

export default function Board() {
  return (
    <div className="bg-red-200 h-screen overflow-auto">
      <div className="flex">
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <TodoList></TodoList>
        <CreateTodoListBtn />
      </div>
    </div>
  );
}
