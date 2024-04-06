import React, { useState } from 'react'
import logo from '../assets/PropertyPortal.png'
import { FiAlignRight } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function Navbar({userDetails,updateUserDetails}) {
  const [nav,updateNav] = useState(false);
  const list = [{text:"Explore",id:1},{text:"Sell",id:2},{text:"Rent",id:3}];
  return (
      <div className='my-grid-template The position: static property prevents z-index from having an effect.
      Try setting position to something other than static. grid items-center bg-black text-white text-sans-14 h-20 text-lg z-10 '>
      <div className='grid justify-center items-center'><img className='w-20 h-20' src={logo} alt="logo" /></div>
      <div className='hidden justify-center gap-10 cursor-pointer lg:flex'>
        {list.map((element)=>{
          return (
            <div className='hover:scale-75  hover:bg-gray-500 p-2 transition-all duration-200 rounded' key = {element.id} onClick={()=>{helpNavigate(element.text)}}>
                <Link to={`/${element.text}`}>
                {element.text}
                </Link>
            </div>
          )
        })}
      </div>
      <div className='hidden lg:flex gap-4 justify-start'>
        <button className='rounded  bg-orange py-2 p-1 flex items-center'>Get started</button>
        <button className='hover:scale-75  hover:bg-gray-500 p-2 transition-all duration-200 rounded'>Login</button>
      </div>
      <div className='flex lg:hidden col-start-3 justify-end justify-self-center' onClick={()=>{updateNav(!nav)}}>
        <FiAlignRight size={40} />
      </div>
      {
        userDetails.name!="null" && 
        <div>
          <VscAccount />
          <p>{userDetails.name}</p>
        </div>
      }
      <div className={`absolute  ${nav?"top-20":"-top-96"} right-1 md:right-20 flex flex-col gap-2 z-0 bg-gray-500 w-1/3 rounded p-2`}>
                  {list.map((element)=>{
                    return (
                      <div className='p-2 transition-all duration-500 rounded text-right hover:bg-black hover:text-white' key = {element.id} onClick={()=>{helpNavigate(element.text);updateNav(!nav)}}>
                          <Link to={`/${element.text}`}>
                            {element.text}
                          </Link>
                      </div>
                    )
                  })}
               </div>
    </div>

  )
}

export default Navbar
