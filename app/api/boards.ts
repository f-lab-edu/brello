import { Board, List } from "./../mocks/handlers";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useGetBoards = () =>
  useQuery<{ boards: Board[] }>({
    queryKey: ["boards"],
    queryFn: async () => {
      const response = await fetch("/api/trello/boards");
      return response.json();
    },
    staleTime: 0,
  });

export const usePostBoard = () =>
  useMutation({
    mutationFn: async ({ name }: { name: string }) => {
      const response = await fetch("/api/trello/boards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      return response.json();
    },
  });

export const useGetLists = ({ boardId }: { boardId: number }) =>
  useQuery<{ lists: List[] }>({
    queryKey: ["lists", boardId],
    queryFn: async () => {
      const response = await fetch(`/api/trello/boards/${boardId}/lists`);
      return response.json();
    },
    staleTime: 0,
  });

export const usePostList = () =>
  useMutation({
    mutationFn: async ({
      boardId,
      name,
    }: {
      boardId: number;
      name: string;
    }) => {
      const response = await fetch("/api/trello/Lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ boardId, name }),
      });
      return response.json();
    },
  });

export const usePostCard = () =>
  useMutation({
    mutationFn: async ({ listId, name }: { listId: number; name: string }) => {
      const response = await fetch("/api/trello/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listId, name }),
      });
      return response.json();
    },
  });

export const usePutList = () =>
  useMutation({
    mutationFn: async ({
      source,
      destination,
    }: {
      source: { droppableId: string; index: number };
      destination: { droppableId: string; index: number };
    }) => {
      const response = await fetch("/api/trello/lists", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ source, destination }),
      });
      return response.json();
    },
  });
