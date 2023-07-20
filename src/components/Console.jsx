import React from 'react'
import ConsoleCanvas from '../cnvas/Console'

function Console() {
  return (
    <div className='bg-hero-pattern object-cover w-full h-[520px] text-white  flex flex-col sm:flex-row p-5'>
      
      <div className='flex flex-row justify-center '>
              <div className='flex flex-col  items-center sm:translate-y-0  p-2  '>
        <div className='bg-[#21D4FD] w-7 h-7 rounded-full'/>
        <div className='w-2 sm:h-44 h-28  rounded-sm blue-gradient1 -translate-y-3 -translate-x-[1px]'/>
      </div>     
      <div className='sm:text-base mini:text-xs mini1:text-sm'>
        <h1 className='text-3xl text-gray-300 mx-4 font-sans p-3'>PlayStation 5</h1>
      <h4 className='sm:w-1/2 font-sans'>
      The PlayStation 5 (PS5) is a popular video game console developed by Sony Interactive Entertainment. It is the successor to the PlayStation 4 and offers improved hardware capabilities, enhanced graphics, and faster loading times.
</h4>
<div className='flex flex-row justify-center items-center p-5 space-x-5'>
  <button className='bg-[#21d4fd] sm:text-xl text-sm rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75font-sans'>Buy Now</button>
  <button className='bg-[#21d4fd] sm:text-xl text-sm rounded-full p-2 hover:bg-[#1F1F1F] hover:text-white duration-75 font-sans '>More Info</button>
</div>
  </div>
      </div>

  <div className='flex justify-center items-center flex-col flex-1 '>
    <ConsoleCanvas/>
  </div>

    </div>
  )
}

export default Console