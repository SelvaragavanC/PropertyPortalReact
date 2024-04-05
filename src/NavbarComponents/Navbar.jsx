import React from 'react'
import logo from '../assets/PropertyPortal.png'
import { FiAlignRight } from "react-icons/fi";

function Navbar() {
  return (
    <div className='my-grid-template grid items-center bg-black text-white text-sans-14 h-20 text-lg '>
      <div className='grid justify-center items-center'><img className='w-20 h-20' src={logo} alt="logo" /></div>
      <div className='hidden justify-center gap-10 cursor-pointer lg:flex'>
        <div className='hover:scale-75 hover:bg-gray-500 p-2 transition-all duration-200 rounded'>Explore</div>
        <div className='hover:scale-75  hover:bg-gray-500 p-2 transition-all duration-200 rounded' >Rent</div>
        <div className='hover:scale-75  hover:bg-gray-500 p-2 transition-all duration-200 rounded'>Sell</div>
      </div>
      <div className='hidden lg:flex gap-4 justify-start'>
        <button className='rounded  bg-orange py-2 p-1 flex items-center'>Get started</button>
        <button className='hover:scale-75  hover:bg-gray-500 p-2 transition-all duration-200 rounded'>Login</button>
      </div>
      <div className='flex lg:hidden col-start-3 justify-end justify-self-center'>
        <FiAlignRight size={40} />
      </div>
    </div>
  )
}

export default Navbar
