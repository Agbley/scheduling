import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
             {/* Left Section  */}
             <div>
<img className='mb-5' height={60} width={60} src={assets.logo} alt=''/>
<p className='w-full md:w-2/3 text-gray-600 leading-6'>This is a good place to hire developers. If you have been searching for developers and never found the developer you want well then you are likely to find the developers here.</p>
             </div>
             {/* Middle Section  */}
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
             </div>
             {/* Right Section  */}
             <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+233240231234</li>
                    <li>dev@devpoint.com</li>
                </ul>
             </div>
        </div>
        {/* Copyright Text */}
        <div>
         <hr/>
         <p className='py-5 text-sm text-center'>Copyright 2024@ Devpoint - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer