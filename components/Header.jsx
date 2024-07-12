"use client"
import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if(window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]")
      } else {
        setShow ("shadow-sm")
      }
    } else {
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return() => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="flex h-[60px] justify-between items-center">
      <Link href="/">
        <Image src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-e-commerce-logo-template-png-image_5066821.jpg" alt="logo" width={150} height={40} />
      </Link>
      <Menu 
        showCatMenu={showCatMenu} 
        setShowCatMenu={setShowCatMenu} />

      {mobileMenu && (
        <MobileMenu 
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className='flex items-center gap-2 text-black'>
          {/* favourite icon  */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.05] cursor-pointer relative'>
              <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px[5px]'>5</div>
          </div>
          {/* cart icon  */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.05] cursor-pointer relative'>
              <BsCart className='text-[15px] md:text-[20px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px[5px]'>5</div>
          </div> 
          {/* mobile icon  */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.05] cursor-pointer relative -mr-2'>
            {mobileMenu ? (
              <VscChromeClose className='text-[16px]' onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className='text-[20px]' onClick={() => setMobileMenu(true)} />
            )}
          </div>
      </div>
      </Wrapper>
    </header>
  )
}


export default Header