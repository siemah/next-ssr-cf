export const config = {
  runtime: "edge",
};

export default function handler(req: Request) {
  return new Response(
    JSON.stringify({
      data: [],
      total: 0,
      page: 1,
      message: "Azul a winathan"
    }),
    {
      status: 200,

    }
  );
}