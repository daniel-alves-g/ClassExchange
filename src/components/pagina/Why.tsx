'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/types/variants";
import { Handshake, KeySquare, TrendingUp  } from 'lucide-react';


export default function Why() {
    return (
        <section className="section flex items-center" id="why">
            <div className="container mx-auto">
                <motion.h2 
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className="h2 text-center"
                >
                    Serviços ofertados pelo nosso Sistema
                </motion.h2>
                <motion.p 
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className="max-w-[680px] text-center mx-auto mb-2"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cumque quae quos, sapiente sit repudiandae repellendus itaque reprehenderit rem quis doloremque? Soluta laboriosam perspiciatis non ducimus cumque saepe harum sunt.
                </motion.p>

                {/* serviços imagem                
                    <motion.div 
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.6 }}
                        className='hidden md:flex justify-center mb-6 xl:mb-2'
                    >
                        <Image 
                            src={'./whyImage.svg'}
                            width={600}
                            height={220}
                            alt="zz"
                        />
                    </motion.div>
                */}


                {/* grid */}
                <motion.div
                    variants={fadeIn('up', 0.9)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.4 }}
                    className="flex flex-wrap justify-center items-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px] xl:mt-4"
                >
                    {/* item 1 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <KeySquare className="text-[38px] text-green-500 mb-4"/>
                        <h3 className="h3">Rent simply and quickly</h3>
                        <p className="hidden xl:flex">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis eos, ipsam necessitatibus rem esse unde nesciunt.
                        </p>
                    </div>

                    {/* item 2 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <TrendingUp className="text-[38px] text-green-500 mb-4"/>
                        <h3 className="h3">Rent simply and quickly</h3>
                        <p className="hidden xl:flex">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis eos, ipsam necessitatibus rem esse unde nesciunt.
                        </p>
                    </div>

                    {/* item 3 */}
                    <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
                        <Handshake className="text-[38px] text-green-500 mb-4"/>
                        <h3 className="h3">Rent simply and quickly</h3>
                        <p className="hidden xl:flex">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis eos, ipsam necessitatibus rem esse unde nesciunt.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}