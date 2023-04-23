import React, { useEffect, useState } from 'react'
import CartItems from '../components/CartItems'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'


const Cart = () => {
  const productData = useSelector((state) => state.cart.productsData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity
      return price
    });
    setTotalAmt(price.toFixed(2))
  },[productData])
  
  return (
    <div>
      <img
        className='w-full h-60 object-cover'
        src="https://images.unsplash.com/photo-1605246811037-7a815fa646e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="cartImg" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItems />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Totals</h2>
            <p className=' flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-bold text-lg'>
                $ {(totalAmt).toLocaleString()}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nam explicabo molestiae quasi architecto quam perspiciatis commodi praesentium eius dolore atque nihil nostrum quia consectetur sit id suscipit tempore in.
              </span>
            </p>
          </div>
          <p className='font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>$ {(totalAmt).toLocaleString()}</span>
          </p>
          <button className='bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Proceed to Checkout</button>
        </div>
      </div>
      <ToastContainer 
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        />
    </div>
  )
}

export default Cart