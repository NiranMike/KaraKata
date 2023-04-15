import React from 'react'
import { cart } from '../assets'
import {BiUserCircle} from "react-icons/bi"


const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <p className='text-2xl text-black font-bold'>KARAKATA</p>
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Home</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Pages</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Blog</li>
          </ul>
          <div className='relative'>
            <img className='' src={cart} alt="" />
            <span className='absolute bg-gray-300 rounded-full w-6 h-6 top-4 left-3 text-sm flex items-center justify-center font-semibold'>0</span>
          </div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmChuf7U9Z2ilFHSWlM0KuV_iyNuss5hTEoA&usqp=CAU' alt='userAvater' className='w-8 h-8 rounded-full'/>

        </div>
      </div>
      
    </div>
  )
}

export default Header