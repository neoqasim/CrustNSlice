import React, { useState } from 'react'
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeart, FaWallet, FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsSaveFill } from "react-icons/bs";



const MobNavbar = ({ handleNav, nav }) => {

    return (
        <>
            <div className="bg-black/85 fixed w-full h-screen z-10 top-0 left-0 duration-1000  "></div>
            <div className='fixed top-0 left-0 w-[340px] h-screen bg-white z-10 duration-300 '>
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={handleNav} />
                <h1 className='text-2xl  p-4 '>
                    Best <span className='font-bold'>Fries</span>
                </h1>
                <nav>
                    <ul className='flex flex-col p-4'>
                        <li className='text-xl py-4 flex items-center' ><TbTruckDelivery className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex items-center' > <FaHeart className='mr-4' /> Favorities</li>
                        <li className='text-xl py-4 flex items-center' ><FaWallet className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex items-center' ><BiSolidHelpCircle className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex items-center' ><AiFillTag className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex items-center' ><BsSaveFill className='mr-4' />Best One</li>
                        <li className='text-xl py-4 flex items-center' > <FaUserFriends className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default MobNavbar