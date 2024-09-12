'use client'
import React,{ useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { CalendarSearch, ArrowRight } from 'lucide-react';
import { DateRange } from 'react-date-range';
import { format, addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

interface DateRangeState {
    startDate: Date;
    endDate: Date;
    key: string;
  }


export default function DateSelection() {
    const [date, setDate] = useState<DateRangeState[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        },
    ]);

    return (
        <Menu as='div' className='w-full h-full flex xl:flex-row'>
            <div className="relative flex-1">
                <MenuButton className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
                            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                                <CalendarSearch className="text-primary"/>
                                <div className="text-[15px] uppercase font-bold">
                                    Selecione a Data
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 xl:ml-6">
                                <div className="text-[13px] font-medium text-gray-500">
                                    {format(date[0].startDate, 'dd/MM/yyy')}
                                </div>
                                    <ArrowRight className="text-gray-500" size={16} />
                                <div className="text-[13px] font-medium text-gray-500">
                                    {date[0].endDate ? (
                                        <div>{format(date[0].endDate, 'dd/MM/yyyy')}</div>
                                    ) : (
                                        <div>{format(date[0].startDate, 'dd/MM/yyyy')}</div>
                                    )}
                                </div>
                            </div>
                </MenuButton>

                <MenuItems className='dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 rounded-[10px] overflow-hidden'>
                    <DateRange 
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        rangeColors={['#ed1d24']}
                        minDate={addDays(new Date(), 0)}
                        onChange={item => setDate([item.selection as DateRangeState])}
                    />
                </MenuItems>
            </div>
        </Menu>
    );
}