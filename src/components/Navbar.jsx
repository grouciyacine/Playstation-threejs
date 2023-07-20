import React, { useCallback, useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';

function Navbar() {
  const TOP_OFFSET=66
  const [toggle,setToggle]=useState(false);
  const [showBg,setShowBg]=useState(false)
  const toggleHandler=useCallback(()=>{
    setToggle((active)=>!active)
  },[])
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>=TOP_OFFSET){
        setShowBg(true)
      }else{
        setShowBg(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <nav className={`fixed flex flex-row justify-start items-center z-30 ${showBg?'bg-secondary':'bg-transparent'} w-full h-16   p-2 text-lg text-gray-300`}>
        <img src='/logo.png' alt='logo' className='w-12 ml-4 h-12 space-x-3 object-cover   rounded-full'/>
        <div className='pl-14 hidden sm:flex'>
            <a href="#games" className='mx-2 hover:text-white  transition-all duration-75  '>
            Games
            </a>
            <a href="#controller" className='mx-2  hover:text-white  transition-all duration-75 '>
            Controller
            </a>
            <a href="#console" className='mx-2  hover:text-white  transition-all duration-75'>
            Console
            </a>
        </div>
        <div onClick={toggleHandler} className='flex flex-row justify-end items-end sm:hidden p-2 flex-1'>
          {!toggle?<img src='/menu.png' alt='' className='w-10 object-contain h-10 left-0  '/>:<img src='/close.png' alt='' className='w-10 object-contain h-10 left-0  '/>}
          <div className='relative'>
          {toggle &&  <MobileMenu/>
          }            
          </div>

        </div>
    </nav>
  )
}

export default Navbar