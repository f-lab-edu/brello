import { Draggable } from "react-beautiful-dnd";
import { Card } from "../mocks/handlers";

interface Props {
  card: Card;
  index: number;
}

export default function Card({ card, index }: Props) {
  return (
    <Draggable key={card.id} draggableId={String(card.id)} index={index}>
      {(provided) => {
        return (
          <li
            className="bg-white mb-2 p-2 border rounded-lg shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {card.name}
          </li>
        );
      }}
    </Draggable>
  );
}
