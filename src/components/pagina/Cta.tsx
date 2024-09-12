'use client'

import { Textarea } from "@/components/ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Label } from "@/components/ui/label"

export default function Cta() {
    return (
        <section className="pt-24 flex items-center pb-10" id="contact">
            
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row xl:items-center xl:justify-around xl:gap-4'>

                    {/* help e perguntas frequentes */}
                    <div className='w-[50%] pb-5 flex justify-center items-center flex-col gap-3'>
                        <h2 className='h3 font-bold text-gray-700'>Suporte e Perguntas Frequentes</h2>
                        <Accordion  type="single" collapsible className="w-[75%]">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className='flex'>
                            <Button>Mais Informações</Button>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className='w-[50%]'>
                    <h2 className='h3 font-bold text-gray-700'>Entre em contato</h2>
                        <form action="" className="flex flex-col gap-2">
                            <div className="w-[75%]">
                                <Label htmlFor="email" className="ml-2 font-semibold text-md">Digite seu Email</Label>
                                <Input type='email' placeholder='Seu Email...'/>
                            </div>
                            <div className="w-[75%]">
                                <Label htmlFor="email" className="ml-2 font-semibold text-md">Digite o Assunto</Label>
                                <Input type='text' placeholder='Qual o Assunto'/>
                            </div>
                            <div className="w-[75%]">
                                <Label htmlFor="email" className="ml-2 font-semibold text-md">Digite p Conteudo</Label>
                                <Textarea placeholder='Qual o conteudo'/>
                            </div>
                            <div>
                                <Button type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}