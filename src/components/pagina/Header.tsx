'use client'
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import SearchMobile from "./SearchMobile";
import { useMediaQuery } from 'react-responsive';
import { Menu, CircleX } from "lucide-react"
import { SearchContext } from "@/context/search";
 

export default function Header() {
    const { setSearchActive } = useContext(SearchContext)

    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px),'
    });

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 40){
                setHeader(true);
            } else {
                setHeader(false);
            };

            if(window.scrollY > 800){
                setSearchActive(true);
            } else {
                setSearchActive(false);
            };
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    });

    return (
        <header className={`${ header ? 'bg-white shadow-md py-2': 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div className="flex justify-between items-center px-4">
                    {/* Logo */}
                    <Link to="home" smooth={desktopMode} spy={true} className="cursor-pointer">
                        <Image 
                            src={'./logo.svg'}
                            width={194}
                            height={64}
                            alt="Logo" 
                        />
                    </Link>

                     {/* nav abrir menu */}
                    <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">
                        { nav ? (
                            <CircleX className="text-4xl"/>
                            ) : (
                            <Menu className="text-4xl"/>
                        )}
                    </div>
                </div>

               {/* navbar */}
                <nav className={`${ nav 
                    ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' 
                    : 'max-h-0 xl:max-h-max' } 
                    flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
                    <Link 
                        className="cursor-pointer font-semibold"
                        to="home"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Home </Link>

                    <Link 
                        className="cursor-pointer font-semibold"
                        to="turmas"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Turmas </Link>

                    <Link 
                        className="cursor-pointer font-semibold"
                        to="sobre"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Sobre </Link>

                    <Link 
                        className="cursor-pointer font-semibold"
                        to="why"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Serviços </Link>

                    <Link 
                        className="cursor-pointer font-semibold"
                        to="contact"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Contato </Link>

                    <a 
                        href="/dashboard"
                        className="cursor-pointer font-semibold bg-green-400 rounded-sm"
                        
                    > Login </a>

                    <Link 
                        className="xl:hidden btn btn-primary btn-sm max-w-[124px] mx-auto"
                        to="/"
                        activeClass="active"
                        smooth={desktopMode}
                        spy={true}
                    > Entrar </Link>

                    <SearchMobile />
                </nav>
            </div>
        </header>
    );
}