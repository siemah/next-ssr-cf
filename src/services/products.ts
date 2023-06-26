export default async function getProducts(slug?: string): Promise<Record<string, any>[]> {
  let products;

  try {
    const response = await fetch("https://data-source.zzenz.com/wp-json/wc/v3/store/2/products");
    products = await response.json();
    products = !!slug ? products.find((p: any) => {
      
      // console.log("[[[[[[[[products]]]]]]]]", decodeURI(p.slug) === decodeURI(slug));
      return decodeURI(p.slug) === decodeURI(slug);
    })
      : products;
      // console.log(products)
  } catch (error) {
    products = [];
  }

  return products;
}