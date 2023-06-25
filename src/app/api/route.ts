import getProducts from "@/services/products";

export const runtime = "edge";

export async function GET(req: Request) {
  const products = await getProducts();
  return new Response(
    JSON.stringify({
      data: products,
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