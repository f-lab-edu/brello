import Link from "next/link";
import { LuUnfoldHorizontal } from "react-icons/lu";

export default function Sidebar() {
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
        <button>+</button>
      </div>
      <ul>
        <Link href="/boards/1">
          <li className="hover:bg-gray-100 p-[10px]">My Trello 1</li>
        </Link>
        <Link href="/boards/2">
          <li className="hover:bg-gray-100 p-[10px]">My Trello 2</li>
        </Link>
      </ul>
    </div>
  );
}
