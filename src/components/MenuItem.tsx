import React from 'react';

const MenuItem = ({ name, price, translation }: { name: any, price: any, translation: any }) => {
    return (
        <div className="flex flex-col text-lg">
            <div className="flex items-center w-full px-6">
                <div className="pr-4">
                    <h3 className="font-medium">{name}{translation && <span className="text-[#A97C50]"> / {translation}</span>}</h3>
                </div>
                <div className="relative flex-grow mx-2 hidden md:block">
                    <span className="absolute w-full border-t-1 border-[#503408]"></span>
                    <span className="absolute w-full border-t-1 border-[#503408] top-[5px]"></span>
                </div>
                <p className="font-semibold ml-auto">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;