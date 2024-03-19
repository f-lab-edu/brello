import Link from "next/link";

import { FaTrello } from "react-icons/fa";

import Button from "../Button";
import { useQueryClient } from "@tanstack/react-query";
import { usePostBoard } from "@/app/api/boards";

type Props = {
  userName?: string;
  onLogin?: () => void;
  onLogout?: () => void;
};

export default function Header({ userName, onLogin, onLogout }: Props) {
  const queryClient = useQueryClient();

  const { mutate } = usePostBoard();

  const handleBoardAdd = () => {
    const name = prompt("보드명을 입력하세요.");

    if (!name) return;

    mutate(
      { name },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["boards"] });
        },
      },
    );
  };

  return (
    <header className="p-[10px] flex justify-between border-solid border-b-2">
      <div className="flex items-center">
        <Link href="/boards">
          <div className="flex items-center">
            <FaTrello />
            <h1 className="ml-[5px] mr-[10px] font-bold">Trello</h1>
          </div>
        </Link>
        <Button
          label="Create + "
          size="small"
          hasBorder={false}
          onClick={handleBoardAdd}
        />
      </div>

      <div className="flex items-center">
        {userName && <p className="mr-2">{userName} 님, 안녕하세요!</p>}
        {userName ? (
          <Button
            label="Logout"
            size="small"
            bgColor="#ddd"
            onClick={onLogout}
          />
        ) : (
          <div className="flex items-center">
            <Button
              label="Login"
              size="small"
              bgColor="#ddd"
              onClick={onLogin}
            />
          </div>
        )}
      </div>
    </header>
  );
}
