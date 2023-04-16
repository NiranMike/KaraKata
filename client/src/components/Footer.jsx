import React from 'react'
import { payments } from '../assets';
import {ImGithub} from "react-icons/im"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='bg-black py-20 text-[#949494]'>
      <div className='max-w-screen-xl gap-4 items-center justify-center mx-auto grid lg:grid-cols-4'>
        <div className='flex flex-col gap-7'>
          <p className='text-2xl text-white font-bold'>KARAKATA</p>
          <p className='text-white text-sm tracking-wide'>ReactBD.com</p>
          <img src={payments} className='w-56' alt="paymentsLogo" />
          <div className='flex gap-5 text-lg text-gray-500'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
          <div className='flex flex-col gap-2 text-base'>
            <p>MBD,Ruwi,Muscat-Oman</p>
            <p>Mobile: 08052840424</p>
            <p>Phone: 09085824521</p>
            <p>e-mail: info@gmail.com</p>
          </div>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
          <div className='flex flex-col gap-2 text-base'>
            <div className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <BsPersonFill />
              <p>My accounts</p>
            </div>
            <div className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <BsPaypal />
              <p>Checkout</p>
            </div>
            <div className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <FaHome />
              <p>Order Tracking</p>
            </div>
            <div className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <MdLocationOn />
              <p>Help & Support</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center'>
          <input className='bg-transparent border px-4 py-2 text-sm ' placeholder='E-mail' type="text" />
          <button className='border text-sm text-white border-t-0 hover:bg-gray-900 py-2 active:bg-white active:text-black'>Subscribe</button>
        </div>
        
      </div>
    </div>
  );
}

export default Footer