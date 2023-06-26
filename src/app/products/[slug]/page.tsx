import ProductImage from "@/components/product-image";
import ProductDetails from "@/components/product-info";
import getProducts from "@/services/products";
import { Metadata, } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params: { slug }, }: Props,
): Promise<Metadata> {
  // fetch data
  const product = await getProducts(slug) as Record<string, any>;
  // optionally access and extend (rather than replace) parent metadata
// console.log("<<<<first>>>>", product)
  return {
    title: product.name,
    description: product.short_description,
    twitter: {
      title: product.name,
      site: `/products/${product.slug}`,
      description: product.short_description,
      card: "summary",
      creator: "siemah",
      images: [product.images?.[0]?.src]
    },
    openGraph: {
      type: "article",
      url: `/products/${product.slug}`,
      images: [product.images?.[0]?.src],
      title: product.name,
      description: product.short_description,
    }
  }
}

export default async function ProductPage({ params: { slug } }: any) {
  const product = await getProducts(slug);
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        {/* @ts-ignore */}
        <ProductImage images={product.images} />
        <ProductDetails
          productData={product}
        />
      </div>
    </div>
  )
}
