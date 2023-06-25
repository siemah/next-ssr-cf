import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  shortDescription: string;
  price: number;
}
export default function Card({ name, image, price, shortDescription }: CardProps) {
  return (
    <div className="bg-white focus:outline-none mx-2 w-72 xl:mb-0 mb-8 rounded-md">
      <div className="relative focus:outline-none w-full h-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          alt={name}
          src={image}
          className="object-contain"
          fill
          unoptimized
          priority={false}
          placeholder="blur"
          blurDataURL={`https://images.weserv.nl/?url=${image}&output=webp&blur=50&quality=100`}
        />
      </div>
      <div className="">
        <div className="flex items-center justify-between px-4 pt-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
            </svg>
          </div>
          <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
            <p className="focus:outline-none text-lg font-bold text-yellow-700">
              {price}
              <span className="text-xs font-normal">DZD</span>
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="focus:outline-none text-lg font-semibold truncate">{name}</h2>
            <p className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
          </div>
          <p className="focus:outline-none text-xs text-gray-600 mt-2 truncate">{shortDescription}</p>
          <div className="flex mt-4">
            <div>
              <p className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
            </div>
            <div className="pl-2">
              <p className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <h2 className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
            <h3 className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
          </div>
        </div>
      </div>
    </div>
  );
}
