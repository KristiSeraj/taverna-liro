'use client';

import React, {useEffect, useState} from 'react';
import MenuCategory from "@/components/MenuCategory";

const Menu = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('food.json').then(res => res.json()).then(data => setData(data?.categories));
    }, [])
    return (
        <div className="relative min-h-screen bg-[#F8F8F2] text-[#503408]">
            <div
                className="relative flex flex-col justify-center items-center h-[50vh] md:h-[75vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/menu_background.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <h1 className="relative text-lg font-bold text-white px-6 py-3 uppercase">
                    Our traditional
                </h1>

                <h1 className="relative text-6xl text-white px-6 py-3 rounded-lg uppercase">
                    Menu
                </h1>
            </div>

            <div className="max-w-6xl mx-auto grid mt-12">
                {data.map((category, index) => (
                    <MenuCategory key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Menu;