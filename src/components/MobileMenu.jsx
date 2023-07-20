import React from 'react'

function MobileMenu() {
  return (
    <div className='bg-secondary w-28 translate-x-4 p-4 h-40 rounded-xl flex flex-col space-y-5 absolute z-20 right-0'>
                    <a href="#Games" className='mx-2 hover:text-white  transition-all duration-75  '>
            Games
            </a>
            <a href="#Games" className='mx-2  hover:text-white  transition-all duration-75 '>
            Hardware
            </a>
            <a href="#Games" className='mx-2  hover:text-white  transition-all duration-75'>
            Controller
            </a>
    </div>
  )
}

export default MobileMenu