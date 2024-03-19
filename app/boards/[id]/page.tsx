"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useQueryClient } from "@tanstack/react-query";

import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";
import List from "@/app/_components/List";
import Button from "@/app/_components/Button";

import { useGetLists, usePostList, usePutList } from "@/app/api/boards";
import { useParams } from "next/navigation";

export default function BoardPage() {
  const params = useParams();
  const { id: boardId } = params;

  const queryClient = useQueryClient();

  const { mutate: putList } = usePutList();

  //이름을 변경
  const { mutate: postList } = usePostList();

  const { data, isLoading } = useGetLists({ boardId: Number(boardId) });

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    putList(
      { source, destination },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["lists"] });
        },
      },
    );
  };

  const handleListAdd = () => {
    const name = prompt("리스트명을 입력하세요.");

    if (!name) return;

    postList(
      { name, boardId: Number(boardId) },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["lists"] });
        },
      },
    );
  };

  if (isLoading) return <></>;

  return (
    <>
      <Header userName="devbit4" />
      <div className="flex overflow-hidden h-[calc(100%-46px)]">
        <Sidebar />
        <div className="overflow-x-auto flex items-start h-full p-4">
          <DragDropContext onDragEnd={handleDragEnd}>
            {data?.lists.map((list) => {
              return <List key={list.id} list={list} />;
            })}
          </DragDropContext>

          <Button label="+ Add Another List" onClick={handleListAdd} />
        </div>
      </div>
    </>
  );
}
