'use client'
import DashCard from "@/components/dashboard/DashCard";
import DashNavbar from "@/components/dashboard/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { seed } from "@/dataDashboard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { format } from "date-fns"
import { Calendar as CalendarIcon, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";

export default function Substituicao() {
    const [date, setDate] = useState<Date>()
    return (
        <section className="flex flex-col gap-5 w-full">
            <DashNavbar />
            <div className="pl-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard" className="font-semibold">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard/users" className="font-semibold">Substituição</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>



            <section className="container mt-3 p-2 bg-gray-400 rounded-lg flex gap-3">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o curso" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="system">Agricultura</SelectItem>
                        <SelectItem value="light">Agronomia</SelectItem>
                        <SelectItem value="dark">Tads</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Selecione o Semestre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1 Semestre</SelectItem>
                        <SelectItem value="2">2 Semestre</SelectItem>
                        <SelectItem value="3">3 Semestre</SelectItem>
                    </SelectContent>
                </Select>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[180px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Selecione a Data</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

                <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Buscar
                </Button>
            </section>
        </section>
    )
}