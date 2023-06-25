export default async function getProducts(): Promise<Record<string, any>[]> {
  let products;

  try {
    const response = await fetch("https://data-source.zzenz.com/wp-json/wc/v3/store/2/products");
    products = await response.json();
  } catch (error) {
    products = [];
  }

  return products;
}