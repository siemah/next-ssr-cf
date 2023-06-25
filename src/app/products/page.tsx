import Card from '@/components/card';
import getProducts from '@/services/products'
import React from 'react'

export default async function page() {
  const products = await getProducts();
  console.log(products)
  return (
    <div className="focus:outline-none">
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {
            products.map(product => (
              <Card
                key={`card-${product?.id}`}
                name={product?.name}
                price={product?.price}
                shortDescription={product?.short_description}
                image={product?.thumbnail?.src}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
