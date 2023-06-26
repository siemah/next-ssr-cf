"use client";
import { useState, useRef } from 'react'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductImage({ images }: any) {
  const [mainImg, setMainImg] = useState(images[0])
  const ref = useRef<HTMLDivElement>(null!);

  function scroll(scrollOffset: any) {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-96">
        <Image
          src={mainImg.src}
          alt={"mainImg.altText"}
          className="transform duration-500 ease-in-out hover:scale-105"
          fetchPriority={"high"}
          fill
          priority
          unoptimized
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute left-0 z-10 opacity-75"
          onClick={() => scroll(-300)}
        >
          {`<`}
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
        >
          {
            images.map((imgItem: any, index: number) => (
              <button
                key={index}
                className="relative w-40 h-32 flex-shrink-0 rounded-sm "
                onClick={() => setMainImg(imgItem)}
              >
                <Image
                  src={imgItem.src}
                  alt={"product image"}
                  className=""
                  fill
                  unoptimized
                />
              </button>
            ))
          }
        </div>
        <button
          aria-label="right-scroll"
          className="h-32 bg-palette-lighter hover:bg-palette-light  absolute right-0 z-10 opacity-75"
          onClick={() => scroll(300)}
        >
          {`>`}
        </button>
      </div>
    </div>
  )
}

export default ProductImage