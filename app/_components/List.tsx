"use client";

import { Droppable } from "react-beautiful-dnd";
import Button from "./Button";
import Card from "./Card";

import { usePostCard } from "../api/boards";
import { useQueryClient } from "@tanstack/react-query";
import { List } from "../mocks/handlers";

type props = {
  list: List;
};

export default function List({ list }: props) {
  const queryClient = useQueryClient();

  const { mutate: postCard } = usePostCard();

  const handleCardAdd = () => {
    const name = prompt("텍스트를 입력하세요.");

    if (!name) return;

    postCard(
      { name, listId: list.id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["lists"] });
        },
      },
    );
  };

  return (
    <div className="border-solid border-2 bg-gray-100 mx-2 min-w-[270px] rounded-lg p-4 max-h-full flex flex-col">
      <h3 className="font-semibold mb-4">{list.name}</h3>
      <Droppable droppableId={String(list.id)}>
        {(provided) => {
          return (
            <ul
              className="overflow-y-scroll min-h-[20px]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list.cards.map((card, index) => {
                return <Card key={card.id} card={card} index={index} />;
              })}

              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
      <Button
        label="+ Add a card"
        hasBorder={false}
        bgColor="transparent"
        onClick={handleCardAdd}
      />
    </div>
  );
}
