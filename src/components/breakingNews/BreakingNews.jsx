import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
];

const BreakingNews = () => {
    return (
        <div className='px-37.5'>
            <div className='bg-[#F3F3F3] p-4'>
                <div className='flex items-center gap-5'>
                    <div>
                        <button className='bg-[#D72050] py-2.25 px-6 poppins font-medium text-[20px] leading-7.5 tracking-[0%] text-[#FFFFFF]'>Latest</button>
                    </div>
                    <div>
                        <Marquee pauseOnHover={true} speed={100} gradient={false}>
                            {
                                news.map((item) => {
                                    return(
                                        <p key={item.id} className='poppins font-semibold text-[18px] leading-7.5 tracking-[0%] text-[#403F3F] px-4'>{item.title}</p>
                                    )
                                })
                            }
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;