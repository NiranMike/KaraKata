import React from 'react'
import ProductCard from './ProductCard'

const Product = ({products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 px-8 lg:w-80 text-center'>Shopping Everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className=' max-w-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis veniam magnam dignissimos aliquid laudantium nihil eligendi nam delectus optio autem, ab dolores voluptatum excepturi quaerat tempore, mollitia fugiat,
                nesciunt quod voluptatem. Accusamus neque quam fugiat, doloremque tempore obcaecati distinctio nisi?
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid md:grid-cols-3 xl:grid-cols-4 gap-10'>
        {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
        </div>
    </div>
  )
}

export default Product