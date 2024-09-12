'use client'

import { SearchContext } from "@/context/search"
import { useContext } from "react"
import LocationSelection from "./LocationSection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import { Button } from "../ui/button";

export default function Search() {
    const { searchActive } = useContext(SearchContext)
    return (
        <div className={`${
                searchActive
                    ? 'bg-white rounded-none xl:h-[80px]'
                    : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'
            } hidden xl:block w-full relative shadow-lg`}
            >
            <div className={`flex h-full ${searchActive && 'container mx-auto'}`}>
                <LocationSelection />
                <DateSelection />
                <HoursSelection />

                <div className="xl:h-full flex items-center px-6 xl:px-0">
                    <Button 
                    size={"lg"} className="font-bold text-lg">
                        Buscar 
                    </Button>
                </div>
            </div>
        </div>
    );
}