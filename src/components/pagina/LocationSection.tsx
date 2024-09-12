'use client'
import React,{ useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { MapPin } from 'lucide-react';

const locations = [
    "Campus Campo Grande - IFMS",
    "Campus Coxim - IFMS",
    "Campus Dourados - IFMS",
    "Campus Navirai - IFMS",
    "Campus Três Lagoas - IFMS",
]
export default function LocationSelection() {
    const [location, setLocation] = useState('Escolha o Campus')
    return (
        <Menu as='div' className='w-full h-full flex xl:flex-row'>
            <div className="relative flex-1">
                <MenuButton className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
                    <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                <MapPin className="text-primary"/>
                                <div className="text-[15px] uppercase font-bold">Selecione o Local</div>
                            </div>
                            <div className="uppercase font-medium text-[13px] text-gray-500 text-center xl:ml-8 xl:text-left">{location}</div>
                        </div>
                    </div>
                </MenuButton>

                <MenuItems className='dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
                    {locations.map((location, index) => {
                        return(
                            <div 
                                onClick={() => setLocation(location)}
                                key={index} 
                                className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase">
                                    {location}
                            </div>
                        )     
                    })}
                </MenuItems>
            </div>
        </Menu>
    );
}