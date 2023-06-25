export const runtime = "edge";

export function GET(req: Request) {
  return new Response(
    JSON.stringify({
      data: [],
      total: 0,
      page: 1,
      message: "Azul a winathan"
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json"
      }
    }
  );
}