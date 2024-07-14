import React from 'react'
import Wrapper from './Wrapper';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black text-white pt-14 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-[50px] md:gap-0'> 
      {/* left  */}
          <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row'>
          {/* menu  */}
          <div className='flex flex-col gap-3 shrink-0'>
            <div className='font-medium uppercase text-sm cursor-pointer'>Find a store</div>
            <div className='font-medium uppercase text-sm cursor-pointer'>Become a partner</div>
            <div className='font-medium uppercase text-sm cursor-pointer'>Sign up for email</div>
            <div className='font-medium uppercase text-sm cursor-pointer'>Send us feedback</div>
            <div className='font-medium uppercase text-sm cursor-pointer'>Student Discount</div>
          </div>
          {/* normal menu   */}
          <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row'>
              <div className='flex flex-col gap-3'>
                <div className='font-medium uppercase text-sm'>Get help</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Order status</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Delivery</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Returns</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Payment Options</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Contact us</div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='font-medium uppercase text-sm'>About</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>News</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Careers</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Investors</div>
                <div className='text-white/[0.5] hover:text-white text-sm cursor-pointer'>Sustainability</div>
              </div>
          </div>
          </div>
          {/* right  */}
          <div className='flex gap-4 justify-center md:justify-start'>
              <Link href={"https://facebook.com"}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center  justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaFacebookF size={20} />
              </Link>
              <Link href={"https://twitter.com"}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center  justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <RiTwitterFill size={20} />
              </Link>
              <Link href={"https://youtube.com"}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center  justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaYoutube size={20} />
              </Link>
              <Link href={"https://instagram.com"}
                className='w-10 h-10 rounded-full bg-white/[0.25] flex items-center  justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
                <FaInstagram size={20} />
              </Link>
          </div>
      </Wrapper>
    </footer>
  )
}

export default Footer