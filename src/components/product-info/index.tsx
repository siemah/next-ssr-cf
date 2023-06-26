"use client";
import { useState } from 'react'
import Link from 'next/link'

function BackToProductButton() {
  return (
    <Link href="/" aria-label="back-to-products" className="border border-palette-primary text-palette-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
      justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-sm"
      >
        {`<-`}
        Back To All Products
    </Link>
  )
}
function Price({ currency, num, numSize }: any) {
  return (
    <>
      {currency}<span className={numSize}>{num}</span>
    </>
  )
}

function ProductInfo({ title, description, price }: any) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        {title}
      </h1>
      {/* <p className="font-medium text-lg" dangerouslySetInnerHTML={{__html: description}}/> */}
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        <Price
          currency="DZD"
          num={price}
          numSize="text-2xl"
        />
      </div>
    </div>
  )
}
function ProductForm({ variants, setVariantPrice }: any) {
  const [quantity, setQuantity] = useState<string|number>(1)
  const [variantId, setVariantId] = useState("")
  const [variant, setVariant] = useState("")
  const isLoading = false

  const atcBtnStyle = isLoading ?
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    :
    `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`

  function handleSizeChange(e:any) {
    setVariantId(e)
    // send back size change
    const selectedVariant = variants?.filter((v:any) => v.node.id === e).pop()
    setVariantPrice(selectedVariant.node.price)

    // update variant
    setVariant(selectedVariant)
  }

  function updateQuantity(e: any) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <div className="flex flex-col items-start space-y-1 flex-grow-0">
          <label className="text-gray-500 text-base">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
          />
        </div>
        <div className="flex flex-col items-start space-y-1 flex-grow">
          <label className="text-gray-500 text-base">Size</label>
          <select
            id="size-selector"
            name="size-selector"
            onChange={(event) => handleSizeChange(event.target.value)}
            value={variantId || ""}
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            {
              variants.map((item:any) => (
                <option
                  id={item.node.id}
                  key={item.node.id}
                  value={item.node.id}
                >
                  {item.node.title}
                </option>
              ))
            }
          </select>
        </div>
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
      >
        Add To Cart
        {`+`}
      </button>
    </div>
  )
}
function ProductDetails({ productData }: any) {
  const [variantPrice, setVariantPrice] = useState(productData.variants)

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo
        title={productData.name}
        description={productData.description}
        price={productData.price}
      />
      <ProductForm
        variants={productData?.variants || []}
        mainImg={productData.images}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

export default ProductDetails