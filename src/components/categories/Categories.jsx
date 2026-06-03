import React from 'react';

const Categories = ({ categories }) => {
    return (
        <div className="col-span-3">
            <p className="pb-10 poppins font-semibold text-[20px] leading-7.5 tracking-[0%] text-[#403F3F]">All Categories</p>
            <ul className="space-y-11.25">
                {
                    categories.map((category) => {
                        return (
                            <li key={category.category_id}>
                                <p className="mx-auto text-center poppins font-semibold text-[20px] leading-7.5 tracking-[0%] text-[#9F9F9F]">{category.category_name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Categories;