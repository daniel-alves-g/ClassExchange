'use client'
import DashNavbar from "@/components/dashboard/DashNavbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DataTableDemo } from "@/components/tables/TableCursos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { seed } from "@/dataDashboard";
import CardCadastro from "@/components/dashboard/cardCadastro";

export default function users() {
    const { cardCadastro } = seed
    
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
                            <BreadcrumbLink href="/dashboard/users" className="font-semibold">Usuários</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className=" container grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3">

                    {cardCadastro.map((card => {
                        return (
                            <CardCadastro
                                key={card.id}
                                label={card.Label}
                                link={card.link}
                                icon={card.icon}
                            />
                        )

                    }))
                    }
                </div>

            <div>
                <Tabs defaultValue="account" className="">
                    <div className="container mt-3 flex justify-between">
                        <TabsList className="bg-gray-500 text-white">
                            <TabsTrigger value="account">Campus</TabsTrigger>
                            <TabsTrigger value="professores">Diretores</TabsTrigger>
                            <TabsTrigger value="turmas">Coordenadores</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="container mt-2">
                        <TabsContent value="account" >
                            <DataTableDemo />
                        </TabsContent>
                        <TabsContent value="professores">Professores</TabsContent>
                        <TabsContent value="turmas">turmas</TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}