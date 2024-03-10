"use client";

import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import TodoList from "@/app/_components/TodoList";
import Button from "@/app/_components/Button";

export default function Board() {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden h-[calc(100%-46px)]">
        <Sidebar />
        <div className="overflow-x-auto flex items-start h-full p-4">
          <TodoList />
          <Button label="+ Add Another List" />
        </div>
      </div>
    </>
  );
}
