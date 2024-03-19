import { Draggable } from "react-beautiful-dnd";
import { Todo } from "../store/useBoardStore";

interface ToDoItemProps {
  toDo: Todo;
  index: number;
}

export default function TodoItem({ toDo, index }: ToDoItemProps) {
  return (
    <Draggable key={toDo.id} draggableId={String(toDo.id)} index={index}>
      {(provided) => {
        return (
          <li
            className="bg-white mb-2 p-2 border rounded-lg shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {toDo.text}
          </li>
        );
      }}
    </Draggable>
  );
}
