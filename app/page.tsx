"use client";

import useBearStore from "./store/useBearStore";

export default function Home() {
  const { bears, increaseBear, removeAllBears } = useBearStore();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline my-10">
        {bears} bears around here...
      </h1>
      <button
        className="border-solid border-2 border-indigo-600 w-48 text-center mx-2"
        onClick={increaseBear}
      >
        one up
      </button>
      <button
        className="border-solid border-2 border-indigo-600 w-48 text-center mx-2"
        onClick={removeAllBears}
      >
        remove all
      </button>
    </div>
  );
}
