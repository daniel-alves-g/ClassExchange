'use client'
import React, { useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ArrowRight, CalendarClock } from 'lucide-react';

const hours = ['10:00 AM', '12:00 AM', '14:00 AM', '16:00 AM'];

export default function HoursSelection() {
    const [hour, setHour] = useState('10:00 AM')
    return (
        <Menu as='div' className='w-full h-full flex xl:flex-row'>
            <div className="relative flex-1">
                <MenuButton className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
                    <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                        <CalendarClock className="text-primary" />
                        <div className="text-[15px] uppercase font-bold">Selecione o Horario</div>
                    </div>
                    <div className="flex items-center justify-center gap-x-3">
                        <div className="font-medium text-[13px] text-gray-500 xl:ml-8">{hour}</div>
                        <ArrowRight className="text-gray-500" size={16} />
                        <div className="font-medium text-[13px] text-gray-500">{hour}</div>
                    </div>
                </MenuButton>

                <MenuItems className='dropdown-menu shadow-lg absolute -top-72 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm w-full bg-white max-w-[332px] py-6 rounded-[10px]'>
                    {hours.map((hour, index) => {
                        return (
                            <div 
                                onClick={() => setHour(hour)}
                                className="cursor-pointer py-4 text-center hover:bg-gray-100"
                                key={index}>
                                    {hour}
                            </div>
                        )
                    })}
                </MenuItems>
            </div>
        </Menu>
    );
}