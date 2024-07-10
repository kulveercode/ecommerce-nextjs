"use client"
import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="flex h-[60px] justify-between items-center">
      <Link href="/">
        <Image src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-e-commerce-logo-template-png-image_5066821.jpg" alt="logo" width={150} height={40} />
      </Link>
      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
      <div className='flex items-center gap-2 text-black'>
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black[0.05] cursor-pointer relative'>
              <BsCart className='text-[15px] md:text-[20px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px[5px]'>5</div>
          </div>
      </div>
      </Wrapper>
    </header>
  )
}


export default Header