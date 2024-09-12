'use client'
import DashCard from "@/components/dashboard/DashCard";
import DashNavbar from "@/components/dashboard/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { seed } from "@/dataDashboard";

export default function Painel() {
    const { cardDataSubs } = seed
    return(
        <section className="flex flex-col gap-5 w-full">
        <DashNavbar />
        <div className="pl-5">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard" className="font-semibold">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb>
        </div>



        <div className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            
        </div>
    </section>
    )
}