import React from 'react'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
    return (
        <header className=''>
            {/* top header */}
            <div className='flex items-center bg-amazon_blue p-1 py-3 flex-grow justify-between'>
                {/* logo */}
                <div className='flex items-center mt-2'>
                    <Image
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        width={150}
                        height={35}
                        objectFit='contain'
                    />
                </div>
                {/* search */}
                <div className='h-10 items-center w-96 bg-yellow-400 rounded hover:bg-yellow-500 w-'>
                    <input className="h-full w-11/12 rounded-r-none rounded px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none" />
                    <button className="w-1/12">
                        🔍
                    </button>

                </div>
                <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap mx-6">
                    <div className="box link focus:border-blue-400" onClick={signIn}>
                        <p className="text ">Hola, identificate</p>
                        <p className="text font-extrabold md:text-sm  ">Cuenta y listas</p>
                    </div>
                    <div className="box link">
                        <p className="text">Devoluciones</p>
                        <p className="text font-extrabold md:text-sm">y Pedidos</p>
                    </div>
                    <div className="box link flex space-x-1">
                        <p>🛒 </p>
                        <span className='bg-yellow-400 rounded-full text-black w-4 text-center font-bold'>1</span>
                        <p className='hidden md:inline text-base'>Cart</p>
                    </div>
                </div>
            </div>
            {/* bottom header */}
            <div className='flex justify-between bg-amazon_blue-light px-5 text-white py-2  text-sm drop-shadow-md'>
                <div className='space-x-6 flex'>
                    <p className='link'>All</p>
                    <p className='link'>Ofertas del Dia</p>
                    <p className='link hidden md:inline'>Servicio al cliente</p>
                    <p className='link hidden md:inline'>listas</p>
                    <p className='link hidden md:inline'>Tarjetas de Regalo</p>
                    <p className='link hidden md:inline'>Vender</p>
                </div>
                <div>
                    <p className='link font-medium'>Compra las ofertas de Electrodomensticos</p>
                </div>
            </div>
        </header >
    )
}
