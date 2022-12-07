import React from 'react'
import ProductItem from './ProductItem.js'

export default function ProductsFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto'>
            {products.map((data) => (
                <ProductItem data={data} />
            ))}
        </div>
    );
}
