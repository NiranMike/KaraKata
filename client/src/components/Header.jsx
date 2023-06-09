import React, {useState} from 'react'
import {cart} from '../assets'
import {BiX} from 'react-icons/bi'
import {FaHamburger} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const productsData = useSelector((state)=> state.cart.productsData)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (<div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
            <div>
                <Link to={'/'} className='text-2xl text-black font-bold'>KARAKATA</Link>
            </div>
            <div className='flex items-center gap-8'>
                <ul className='hidden lg:flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 decoration-[2px] cursor-pointer duration-300'>Blog</li>
                </ul>
                <Link to={'/cart'} className='relative'>
                    <img className=''
                        src={cart}
                        alt='Cart'/>
                    <span className='absolute bg-gray-300 rounded-full w-6 h-6 top-4 left-3 text-sm flex items-center justify-center font-semibold'>{ productsData.length}</span>
                </Link>
                <Link to={'/login'}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmChuf7U9Z2ilFHSWlM0KuV_iyNuss5hTEoA&usqp=CAU' alt='User avatar' className='w-8 h-8 rounded-full'/></Link>
                <button className='lg:hidden z-10 text-black font-bold'
                    onClick={toggleDrawer}>
                    {drawerOpen ?<BiX/> : <FaHamburger />}
                </button>
              {drawerOpen && (
                <div className='fixed block lg:hidden top-0 left-0 w-full h-full bg-white z-50'>
                  <ul className='flex flex-col gap-4 p-4'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-4 cursor-pointer duration-300'>Blogs</li>
                  </ul>
                  <BiX onClick={toggleDrawer} className='m-4 cursor-pointer' size={32} />
                </div>
              )}
              
            </div>
        </div>
      </div>
  )
}

export default Header
