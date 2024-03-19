import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { LuUnfoldHorizontal } from "react-icons/lu";
import { useGetBoards, usePostBoard } from "../api/boards";

export default function Sidebar() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useGetBoards();

  const { mutate: postBoard } = usePostBoard();

  const handleBoardAdd = () => {
    const name = prompt("보드명을 입력하세요.");

    if (!name) return;

    postBoard(
      { name },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["boards"] });
        },
      },
    );
  };

  if (isLoading) return <></>;

  return (
    <div className="min-w-[260px] border-solid border-r-2">
      <div className="h-[57px] p-[10px] border-solid border-b-2 flex justify-between items-center border-solid border-b-2">
        Devbit Workspace
        <LuUnfoldHorizontal />
      </div>
      <Link href="/boards">
        <div className="p-[10px] hover:bg-gray-100">Boards</div>
      </Link>
      <div className="p-[10px] flex justify-between">
        Your boards
        <button onClick={handleBoardAdd}>+</button>
      </div>
      <ul>
        {data?.boards.map((board) => {
          return (
            <Link href={`/boards/${board.id}`} key={board.id}>
              <li className="hover:bg-gray-100 p-[10px]">{board.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
