import Link from 'next/link';
import React from 'react';
import avatar from '../../../src/assets/user.png';
import Image from 'next/image';
import NavLink from '../navLink/NavLink';

const NavBar = () => {
    return (
        <div className='px-37.5 py-12.5 flex justify-between items-center'>
            <div></div>
            <div>
                <ul className='flex gap-5 items-center'>
                    <li className='poppins font-normal text-[18px] leading-7.5 tracking-[0%] text-[#706F6F]'><NavLink href="/">Home</NavLink></li>
                    <li className='poppins font-normal text-[18px] leading-7.5 tracking-[0%] text-[#706F6F]'><NavLink href="/about">About</NavLink></li>
                    <li className='poppins font-normal text-[18px] leading-7.5 tracking-[0%] text-[#706F6F]'><NavLink href="/career">Career</NavLink></li>
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <Image src={avatar} alt="avatar"></Image>
                <button className='px-8 py-2 bg-[#403F3F] poppins font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#FFFFFF]'><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default NavBar;