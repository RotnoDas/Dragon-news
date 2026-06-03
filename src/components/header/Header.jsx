import React from 'react';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='px-37.5 py-12.5 text-center'>
            <Image src={logo} alt="logo" className='mx-auto'></Image>
            <p className='pt-5 pb-2.5 poppins font-normal text-[18px] leading-7.5 tracking-[0%] text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='poppins font-normal text-[20px] leading-7.5 tracking-[0%]'>
                <span className='text-[#403F3F]'>
                    {format(new Date(), 'EEEE, ')}
                </span>
                <span className='text-[#706F6F]'>
                    {format(new Date(), 'LLLL dd, yyyy')}
                </span>
            </p>
        </div>
    );
};

export default Header;