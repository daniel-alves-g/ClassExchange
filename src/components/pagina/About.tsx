'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/types/variants";
import { GitCompareArrows, GitPullRequestArrow, CalendarClock } from 'lucide-react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    return (
        <section className="section flex items-center" id="sobre" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.6 }}
                        className="flex-1 mb-8 xl:mb-0"
                    >
                        <Image
                            className="rounded-[20px]"
                            src={'./aboutImage.svg'}
                            width={600}
                            height={600}
                            alt="aa"
                        />
                    </motion.div>

                    <div className="flex-1 flex items-center xl:justify-center">
                        <div className="xl:max-w-[517px]">
                            <motion.h2
                                variants={fadeIn('up', 0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.6 }}
                                className="h2"
                            >
                                Troca e substituição simplificada
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('up', 0.6)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.6 }}
                                className="mb-[42px] max-w-md"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at molestias, consequuntur eveniet minus expedita eum sint autem obcaecati provident fuga, eligendi dolores illo adipisci magni aut hic, voluptatum laboriosam inventore nihil
                            </motion.p>

                            {/* Status */}
                            <motion.div
                                variants={fadeIn('up', 0.8)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.2 }}
                                className="flex items-center gap-x-8 mb-12"
                            >
                                {/* Dados */}
                                <div className="flex flex-col w-[100px]">
                                    <GitCompareArrows size={40} className="text-green-500 mb-2" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={50} duration={3} delay={1} />
                                        ) : null}
                                        +
                                    </div>
                                    <div className="text-[13px] font-semibold text-gray-700">
                                        troca de <br /> Aulas
                                    </div>
                                </div>

                                {/* Dados */}
                                <div className="flex flex-col w-[100px]">
                                    <GitPullRequestArrow size={40} className="text-green-500 mb-2" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={50} duration={3} delay={1} />
                                        ) : null}
                                        +
                                    </div>
                                    <div className="text-[13px] font-semibold text-gray-700">
                                        troca de <br /> Aulas
                                    </div>
                                </div>

                                {/* Dados */}
                                <div className="flex flex-col w-[100px]">
                                    <CalendarClock size={40} className="text-green-500 mb-2" />
                                    <div className="text-3xl font-black mb-2">
                                        {inView ? (
                                            <CountUp start={0} end={50} duration={3} delay={1} />
                                        ) : null}
                                        +
                                    </div>
                                    <div className="text-[13px] font-semibold text-gray-700">
                                        troca de <br /> Aulas
                                    </div>
                                </div>

                                {/* Dados */}
                            </motion.div>
                            <motion.button 
                                variants={fadeIn('up', 1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.6 }}
                                className="hidden xl:block bg-green-500 hover:bg-green-400 transition-colors duration-300 rounded-[10px] w-full h-12 font-semibold text-white tracking-[2px] text-[14px] max-w-[184px]" 
                            >
                                Ver mais
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}