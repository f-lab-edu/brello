"use client";

import Link from "next/link";
import Sidebar from "../_components/Sidebar";
import Header from "../_components/Header";

import { CiSearch } from "react-icons/ci";

export default function Boards() {
  return (
    <>
      <Header />
      <div className="flex overflow-x-hidden h-[calc(100%-46px)] ">
        <Sidebar />
        <div className="p-[32px]">
          <h3 className="text-[20px] font-bold mb-8">Boards</h3>
          <div className="mb-8">
            <div className="flex items-center">
              <p className="text-[12px] font-semibold my-2">Search </p>
              <CiSearch />
            </div>
            <div>
              <input
                className="border py-2 pl-3 pr-3 sm:text-sm"
                placeholder="Search boards"
                type="text"
                name="search"
              />
            </div>
          </div>
          <ul className="flex flex-wrap max-h-[70%] overflow-y-scroll">
            <div>
              <button className="w-[230px] h-[96px] border my-4 mr-4 bg-gray-100 text-[14px]">
                Create new board
              </button>
            </div>

            <Link href="boards/1">
              <li className="w-[230px] h-[96px] border my-4 mr-4 p-2 bg-red-400 text-white font-bold">
                첫번째 보드
              </li>
            </Link>

            <Link href="boards/2">
              <li className="w-[230px] h-[96px] border my-4 mr-4 p-2 bg-blue-400 text-white font-bold">
                두번째 보드
              </li>
            </Link>
            <Link href="boards/2">
              <li className="w-[230px] h-[96px] border my-4 mr-4 p-2 bg-blue-400 text-white font-bold">
                세번째 보드
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
