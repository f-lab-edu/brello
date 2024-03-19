import { HttpResponse, PathParams, http } from "msw";

export type Card = {
  id: number;
  name: string;
};

export type List = {
  id: number;
  name: string;
  boardId: number;
  cards: Card[];
};

export type Board = {
  id: number;
  name: string;
};

const boards: Board[] = [{ id: 1, name: "myBoard1" }];
const lists: List[] = [
  {
    id: 1,
    name: "list1",
    boardId: 1,
    cards: [],
  },
];

export const handlers = [
  // // GET boards
  http.get("/api/trello/boards", () => {
    return HttpResponse.json({ boards }, { status: 200 });
  }),

  // // POST boards
  http.post<PathParams, { name: string }>(
    "/api/trello/boards",
    async ({ request }) => {
      const body = await request.json();
      const { name } = body;
      const newBoard = { id: boards.length + 1, name };

      boards.push(newBoard);

      return HttpResponse.json({ newBoard }, { status: 201 });
    },
  ),

  // // GET lists
  http.get("/api/trello/boards/:boardId/lists", ({ params }) => {
    const { boardId } = params;
    const filteredLists = lists.filter(
      (list) => String(list.boardId) === boardId,
    );
    return HttpResponse.json({ lists: filteredLists }, { status: 200 });
  }),

  // // POST list
  http.post<PathParams, { name: string; boardId: number }>(
    "/api/trello/lists",
    async ({ request }) => {
      const body = await request.json();
      const { name, boardId } = body;
      const newList = { id: lists.length + 1, name, boardId, cards: [] };

      lists.push(newList);

      return HttpResponse.json({ newList }, { status: 201 });
    },
  ),

  // // GET cards
  http.get("/api/trello/lists/:listId/cards", ({ params }) => {
    const { listId } = params;
    const targetList = lists.find((list) => String(list.id) === listId);

    if (!targetList) return HttpResponse.json(null, { status: 404 });

    return HttpResponse.json({ cards: targetList.cards }, { status: 200 });
  }),

  // // POST card
  http.post<PathParams, { name: string; listId: number }>(
    "/api/trello/cards",
    async ({ request }) => {
      const body = await request.json();
      const { name, listId } = body;
      const targetList = lists.find((list) => list.id === listId);

      if (!targetList) return HttpResponse.json(null, { status: 404 });

      const newCard = {
        id: targetList.cards.length + 1,
        name,
      };

      targetList.cards.push(newCard);

      return HttpResponse.json({ newCard }, { status: 201 });
    },
  ),

  // // PUT card
  http.put<
    PathParams,
    {
      source: { droppableId: string; index: number };
      destination: { droppableId: string; index: number };
    }
  >("/api/trello/lists", async ({ request }) => {
    const body = await request.json();
    const { source, destination } = body;

    const sourceList = lists.find(
      (list) => list.id === parseInt(source.droppableId),
    );
    const destinationList = lists.find(
      (list) => list.id === parseInt(destination.droppableId),
    );

    if (!sourceList || !destinationList) {
      return HttpResponse.json(null, { status: 404 });
    }

    const sourListCard = sourceList.cards[source.index];
    sourceList.cards.splice(source.index, 1);
    destinationList.cards.splice(destination.index, 0, sourListCard);

    return HttpResponse.json(null, { status: 200 });
  }),
];
