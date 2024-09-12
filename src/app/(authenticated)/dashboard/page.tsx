'use client'
import DashCard from "@/components/dashboard/DashCard";
import DashNavbar from "@/components/dashboard/DashNavbar";
import { seed } from "@/dataDashboard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useState } from "react";

  


export default function Dashboard() {
    const { cardData } = seed
    return (
        <>
            <section className="flex flex-col gap-5 w-full">
                <DashNavbar />
                <div className="pl-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dasboard" className="font-semibold">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">

                    {cardData.map((card => {
                        return (
                            <DashCard
                                key={card.id}
                                amount={card.amout}
                                discription={card.description}
                                icon={card.icon}
                                label={card.Label}
                            />
                        )

                    }))
                    }
                </div>

            </section>
        </>
    )
}