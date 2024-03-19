"use client";

import Link from "next/link";
import Button from "./_components/Button";

export default function HomePage() {
  return (
    <div className="w-full h-full p-20 flex justify-between text-center bg-[#d7eab1]">
      <div className="flex flex-col justify-center text-left">
        <h1 className="text-6xl font-bold mb-8">Brello</h1>
        <h3 className="text-3xl font-semibold mb-4">
          Brello lets you work more collaboratively and get more done.
        </h3>
        <p className="mb-6">
          Brello&apos;s board,lists,and cards enable you to organize and
          prioritize your projects in a fun,flexible and rewarding way.
        </p>
        <Link href="/boards">
          <Button label="Continue" />
        </Link>
      </div>
      <img src="/img.webp" alt="" />
    </div>
  );
}
