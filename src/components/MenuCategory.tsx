import React from 'react';
import MenuItem from "@/components/MenuItem";

const MenuCategory = ({ category }: { category: any }) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase text-center">
                <span className="px-4">{category.name}</span>
            </h2>
            <p className="text-m text-[#A97C50] text-center mb-4">{category.translation}</p>
            <div className="space-y-3">
                {category.items.map((item: any, index: any) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default MenuCategory;