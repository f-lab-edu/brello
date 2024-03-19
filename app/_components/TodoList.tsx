import TodoItem from "./TodoItem";
import Button from "./Button";

export default function TodoList() {
  return (
    <div className="border-solid border-2 bg-gray-100 mx-2 min-w-[270px] rounded-lg p-4 max-h-full flex flex-col">
      <h3 className="font-semibold mb-4">타이틀</h3>
      <ul className="overflow-y-scroll">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />

        <TodoItem />
      </ul>
      <Button label="+ Add a card" hasBorder={false} bgColor="transparent" />
    </div>
  );
}
