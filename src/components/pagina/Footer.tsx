'use client'

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/types/variants";
import { Link } from "react-scroll";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Copy from "./Copyright";

export default function Footer() {
    return (
        <footer className="pt-20 z-20" id="contact">
            <div className="container mx-auto mb-24">
                {/* grid */}
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }} 
                    className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
                >
                    <div className="flex flex-col flex-1 gap-y-8">
                        {/* Logo */}
                        <Link to={'home'} smooth={true} spy={true} className="cursor-pointer">
                            <Image 
                                src={'/logo.svg'} 
                                alt="aa"
                                width={200}
                                height={200}
                            />
                        </Link>
                        {/* Texto */}
                        <div className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit!</div>
                        {/* Telefone e Email */}
                        <div className="flex flex-col gap-y-4 font-semibold">
                            <div className="flex items-center gap-x-[10px]">
                                <Phone />
                                <div className="font-medium">(67) 3461-9999</div>
                            </div>
                            <div className="flex items-center gap-x-[10px]">
                                <Mail />
                                <div className="font-medium">eduexchange@gmail.com</div>
                            </div>
                        </div>

                    </div>

                    {/* Links */}
                    <div className="flex-1 flex flex-col xl:items-center">
                        <div>
                            <h3 className="h3 font-bold mb-8">Campus</h3>
                            <ul className="flex flex-col gap-y-4 font-semibold">
                                <li><a href="http://">Campus Campo Grande</a></li>
                                <li><a href="http://">Campus Coxim</a></li>
                                <li><a href="http://">Campus Dourados</a></li>
                                <li><a href="http://">Campus Navirai</a></li>
                                <li><a href="http://">Campus Três Lagoas</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Suporte */}
                    <div className="flex-1">
                        <h3 className="h3 font-bold mb-8">Atendimento</h3>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex gap-x-2">
                                <div className="text-gray-500">Seg-Sex:</div>
                                <div className="font-semibold">08:00AM - 17:00PM</div>
                            </div>
                            <div className="flex gap-x-2">
                                <div className="text-gray-500">Sab:</div>
                                <div className="font-semibold">08:00AM - 12:00PM</div>
                            </div>
                            <div className="flex gap-x-2">
                                <div className="text-gray-500">Dom:</div>
                                <div className="font-semibold">Fechado</div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex-1">
                        <h3 className="h3 font-bold mb-8">Newsletter</h3>
                        <div className="mb-9 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>

                        <form className="flex gap-x-2 h-14">
                            <Input type="text" placeholder="Insira seu email"/>
                            <Button type="submit">Enviar</Button>
                        </form>
                    </div>
                </motion.div>
            </div>
            <Copy />
        </footer>
    );
}