import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="border-solid border-2 bg-gray-100 min-w-[270px] m-2 rounded-lg p-4">
      <h3 className="font-semibold mb-4">타이틀</h3>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <button className="mt-2">+ Add a card</button>
    </div>
  );
}
