import React, { useState } from 'react'
import Image from 'next/image'
import CurrencyFormat from 'react-currency-format'

export default function ProductItem({ data }) {
    const [rating] = useState(
        Math.floor() * (6 - 1 + 1)) + 1

    const [hasPrime] = useState(Math.random() < 0.5)

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{data.category}</p>
            <Image
                width={200} height={200} objectFit='contain'
                src={data.image}
                alt="Product"
            />
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <h2 className="text-base text-gray-700 line-clamp-2">{data.description}</h2>
            <div className="text-xl font-bold">
                {Array(rating).fill().map((_, i) => '⭐️')}
            </div>
            <div className="my-4">
                <CurrencyFormat
                    value={data.price}
                    displayType="text"
                    prefix="$"
                    className="text-lg font-bold"
                />
            </div>
            {hasPrime && (
                <div className="flex items-center">
                    <img
                        className="w-12"
                        src="https://www.logotypes101.com/logos/875/A41B7A0C2125D3C1F6DDDE56C1203C77/amazon_prime_icon.png"
                        alt="Amazon Prime"
                    />
                    <p className="text-sm text-gray-600 ml-2">FREE Next-Day delivery</p>
                </div>
            )}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                Add to Basket
            </button>
        </div>
    )
}
