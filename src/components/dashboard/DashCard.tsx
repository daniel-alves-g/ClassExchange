import { cn } from "@/lib/utils"
import { CardProps } from "@/types"
import React from "react"

export default function DashCard(props: CardProps) {
    return (
        <CardContent>
            <section className="flex justify-between items-center gap-2">
                <p className="text-lg font-bold">{props.label}</p>
                <props.icon className="h-6 w-6 text-black" />
            </section>
            <section className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">{props.amount}</h2>
                <p className="text-xs">{props.discription}</p>
            </section>
        </CardContent>
    )
}

export const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)} />

    )
}