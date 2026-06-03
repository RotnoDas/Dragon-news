import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='px-37.5'>
            <div className='bg-[#F3F3F3] p-4'>
                <div className='flex items-center gap-5'>
                    <div>
                        <button className='bg-[#D72050] py-2.25 px-6 poppins font-medium text-[20px] leading-7.5 tracking-[0%] text-[#FFFFFF]'>Latest</button>
                    </div>
                    <div>
                        <Marquee>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium vel sed voluptatum, sit facere ipsam magnam pariatur, voluptates deserunt veniam ullam, mollitia illum nostrum placeat eos consequatur. Non, adipisci.
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;