import React from 'react'
import { MdOutlineClose } from "react-icons/md"
import {HiOutlineArrowLeft} from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, decrementQuantity, incremeantQuantity, resetCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const CartItems = () => {
    const productData = useSelector((state) => state.cart.productsData);
    const dispatch = useDispatch();
    
    
  return (
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='text-2xl'>Shopping Cart</h2>
        </div>
        <div>
            {
                  productData.map((item) => (
                    <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                        <div className='flex items-center gap-2'>
                            <MdOutlineClose onClick={()=>dispatch(deleteItem({_id: item._id}))&&toast.error(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-600 
                            cursor-pointer duration-300'/>
                              <img
                                  src={item.image}
                                  alt="productImg" 
                                  className='w-32 h-32 object-cover'
                                  />
                        </div>
                          <h2 className='w-52'>{ item.title }</h2>
                          <p className='w-10'>${(item.price).toLocaleString()}</p>
                          <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                          <p className='text-sm'>Quantity</p>
                          <div className='flex items-center gap-4 text-sm font-semibold'>
                              <button
                                  onClick={() => dispatch(decrementQuantity({_id: item._id, }))}
                              className='flex items-center gap-4 text-sm font-semibold
                              justify-center px-2 hover:bg-gray-700 hover:text-white 
                              cursor-pointer duration-300 active:bg-black'>-</button>
                              <span>({item.quantity})</span>
                              <button
                              onClick={() => dispatch(incremeantQuantity({_id: item._id, }))}
                              className='flex items-center gap-4 text-sm font-semibold
                              justify-center px-2 hover:bg-gray-700 hover:text-white 
                              cursor-pointer duration-300 active:bg-black'>+</button>
                          </div>
                      </div>
                      <p className='w-14'>${(item.quantity * item.price).toLocaleString()}</p>
                    </div>
                ))
            }
        </div>
      <button
        onClick={()=>dispatch(resetCart()) && toast.error("Your cart is Empty")}
        className='bg-red-500 text-white mt-8 ml-7 py-2 px-6 hover:bg-red-800 duration-300'>Reset Cart</button>
      <Link>
        <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
          <span>
            <HiOutlineArrowLeft />
          </span>
          Go Shopping
        </button>
      </Link>
    </div>
  )
}

export default CartItems