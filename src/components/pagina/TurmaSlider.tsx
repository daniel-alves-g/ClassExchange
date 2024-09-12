'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/types/variants";
import { Button } from "../ui/button";
import { UserRound, BookText, Calendar, Clock, MapPin, GitCompareArrows, GitPullRequestArrow } from 'lucide-react';
import { Separator } from "../ui/separator";

const dados = [
    {
        tipo: 'Troca de Aula',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Substituição',
        curso: 'Agronomia',
        semestre: '10 semestre',
        turma: '3234',
        aulas: [
            {
                materia: 'Topografia',
                Professor: 'Augusto',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio 3',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
    {
        tipo: 'Troca de Aula',
        curso: 'Analise de Sistemas',
        semestre: '3 semestre',
        turma: '3222',
        aulas: [
            {
                materia: 'Fundamentos de Design',
                Professor: 'Marcos',
                horas: '07:00 - 11:20',
                data: '15/08/2024',
                sala: 'Laboratorio de Informatica',
            },
        ]
    },
]

export default function TurmaSlider() {
    return (
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className="container mxauto"
        >
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    640: { slidesPerView: 2, spaceBetween: 32 },
                    1260: { slidesPerView: 3, spaceBetween: 32 },
                }}
            >
                {dados.map((dado, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                        >
                            <div className="max-w-[385px] mx-auto sm:mx-0 bg-gray-200 px-6 py-4 rounded-lg shadow-lg">
                                <h3 className="font-semibold text-3xl text-gray-700 flex justify-center mb-3">{dado.tipo}</h3>

                                <div className="flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-700">{dado.curso}</p>
                                    <p>{dado.turma}</p>
                                </div>
                                <p>{dado.semestre}</p>
                                <div className="mt-4">
                                    <div>
                                        <h3 className="font-bold pb-1 text-gray-700">Dados: </h3>
                                        {dado.aulas.map((item, index) => {
                                            return (
                                                <div key={index} className="flex flex-col gap-2">
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <BookText size={18} className="text-gray-700" />
                                                            <p className="font-semibold text-gray-700">Materia:</p>
                                                        </div>
                                                        <p>{item.materia}</p>
                                                    </div>
                                                    <Separator className="bg-gray-300"/>
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <UserRound size={18} className="text-gray-700" />
                                                            <p className="font-semibold text-gray-700">Professor:</p>
                                                        </div>
                                                        <p>{item.Professor}</p>
                                                    </div>
                                                    <Separator  className="bg-gray-300"/>
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <MapPin size={18} className="text-gray-700" />
                                                            <p className="font-semibold text-gray-700">Local:</p>
                                                        </div>
                                                        <p>{item.sala}</p>
                                                    </div>
                                                    <Separator  className="bg-gray-300"/>
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <Clock size={18} className="text-gray-700" />
                                                            <p className="font-semibold text-gray-700">Horas:</p>
                                                        </div>
                                                        <p>{item.horas}</p>
                                                    </div>
                                                    <Separator className="bg-gray-300"/>
                                                    <div className="flex flex-wrap justify-between items-center">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar size={18} className="text-gray-700" />
                                                            <p className="font-semibold text-gray-700">Data:</p>
                                                        </div>
                                                        <p>{item.data}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Button>Detalhes</Button>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>
        </motion.div>
    );
}