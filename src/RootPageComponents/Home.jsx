import React from 'react'

function Home() {
  return (
    <div className='p-3 w-full h-full fixed bg-gradient-to-b from-black to-gray-900 text-white'>
        <h1 className='text-6xl font-mono flex flex-col gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Buy and Sell your properties for free...
        <button className=' lg:hidden bg-gray-500 p-2 text-white font-mono text-3xl w-fit rounded hover:scale-x-110 '>Explore!</button>
        </h1>
    </div>
  )
}

export default Home
