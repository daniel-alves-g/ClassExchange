'use client'

import { useEffect, useState } from "react";
import { ChevronUp } from 'lucide-react';
import { Link } from "react-scroll";

export default function BackToTop() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 400) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    })

    return (
        <Link 
            to="home"
            smooth={true}
            className={`${!isActive && 'hidden' } fixed bg-green-500 hover:bg-green-300 w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white rounded-lg`}
        >
            <ChevronUp className="text-xl"/>
        </Link>
    );
}