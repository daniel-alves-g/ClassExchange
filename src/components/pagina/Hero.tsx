'use client'

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "@/context/search";
import { Button } from "../ui/button";
import { CalendarClock, ShieldCheck } from 'lucide-react';
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/types/variants";

export default function Hero() {
    const { searchActive } = useContext(SearchContext)
    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10 bg-hero-image" id="home">
            {/* texto e buttons */}
            <div className="container mx-auto h-full xl:pt-10">
                <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
                    <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.6 }}
                            className="h1"
                        >
                            Sistema de <span className="text-green-500">Troca & Substituição</span> de aulas
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.6 }}
                            className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
                        >Solução para reduzir e facilitar o tempo de troca e substituição de aulas atravéz da nossa base de dados
                        </motion.p>

                        <motion.div
                            className="flex gap-x-3 justify-center xl:justify-start"
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.8 }}
                        >
                            <Button>
                                <CalendarClock className="mr-2 h-5 w-5" />Quadro de Horarios
                            </Button>
                            <Button>
                                <ShieldCheck className="mr-2 h-5 w-5" />Acessar Sistema
                            </Button>
                        </motion.div>
                    </div>


                    {/* imagem */}
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.6 }}
                        className="relative w-full h-full max-h-[50vh] md:max-w-[70vh] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
                    >
                        <Image
                            src={'./heroImage.svg'}
                            fill
                            alt="aa"
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </motion.div>
                </div>
            </div>
            {searchActive
                ? (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ ease: easeInOut }}
                        className="fixed top-[80px] z-10 w-full max-w-[1920px]"
                    >
                        <Search />
                    </motion.div>
                ) : (
                    <div className="-mt-12 w-full max-w-[1300px] mx-auto">
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <Search />
                        </motion.div>
                    </div>
                )}
        </section>
    );
}