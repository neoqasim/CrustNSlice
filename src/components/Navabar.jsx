import React, { useState } from 'react'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import MobNavbar from './MobNavbar'

const Navabar = () => {
    const [nav, setnav] = useState(false)
    const handleNav = () => {
        setnav(!nav)
        console.log(nav);
    }
    return (
        <div className='max-w-[1600px] mx-auto flex justify-between items-center p-6'>
            <div className='flex items-center'>
                <div className='cursor-pointer' onClick={handleNav}>
                    <CiMenuFries />
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl px-2 '>
                    Best <span className='font-bold'>Fries</span>
                </h1>
                <div className='hidden lg:flex bg-gray-300 rounded-full p-1 text-[14px] '>
                    <p className='bg-black text-white rounded-full p-2'>Delievery</p>
                    <p className='p-2 '>PickUp</p>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
                <CiSearch size={26} />
                <input type="text" placeholder='search foods' className='bg-transparent p-2 focus:outline-none w-full' />
            </div>

            <button className="bg-black px-4 py-2 text-white hidden md:flex items-center gap-2 text-[14px] rounded-full">
                <FaShoppingCart />Cart
            </button>

            {nav ?

                <MobNavbar nav={nav} handleNav={handleNav} /> : ""


            }

        </div>
    )
}

export default Navabar