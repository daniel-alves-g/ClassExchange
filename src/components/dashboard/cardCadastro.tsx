'use client'
import { cn } from "@/lib/utils"
import { CardCadastroProps } from "@/types"
import Link from "next/link"
import React from "react"
import { Button } from "../ui/button"

export default function CardCadastro(props: CardCadastroProps) {
    return (
        <CardContent>
            <section className="flex justify-between items-center gap-2">
                <p className="text-lg font-bold">{props.label}</p>
                <props.icon className="h-6 w-6 text-black" />
            </section>
            <section className="flex flex-col gap-1">
                <Link href={props.link}>
                    <Button>
                        Cadastrar
                    </Button>
                </Link>
            </section>
        </CardContent>
    )
}

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)} />

    )
}