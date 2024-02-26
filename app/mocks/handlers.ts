import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/api/test", () => {
    return HttpResponse.json({
      data: {
        name: "devbit4",
        age: 26,
      },
    });
  }),
];
