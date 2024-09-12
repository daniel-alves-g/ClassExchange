'use client'
import { useState } from "react"
import CustomLink from "./customLink";
import { Bolt, ChevronLeft, ChevronRight, FilePen, GitCompareArrows, GitPullRequestArrow, LayoutDashboard, LogOut, UsersRound } from "lucide-react";
import { Button } from "../ui/button";
import { getMenuItemsByRole } from "@/dataDashboard";
import Image from "next/image";
import { useSession } from "next-auth/react";

const iconMap: Record<string, React.FC<{}>> = {
    dashboard: LayoutDashboard,
    users: UsersRound,
    substituicao: GitPullRequestArrow,
    troca: GitCompareArrows,
    solicitacoes: FilePen,
    settings: Bolt,
}

export default function Nav() {
    const { data: session } = useSession()
    const userRole = session?.user?.role
    const menuItems = getMenuItemsByRole(userRole || '')
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }


    return (
        <nav className={`relative bg-gray-100 border-r-gray-200 border-r-[1px] max-w-20 h-screen sm:max-w-48 flex flex-col items-center justify-between py-6 
            ${isOpen ? 'w-1/4' : 'w-20'}`}
        >
            <Button onClick={handleIsOpen} className="hidden sm:block absolute top-7 transform right-[-18px] bg-primary text-white hover:bg-gray-800 p-1 w-8 h-8 rounded-full">
                {isOpen ? (
                    <ChevronLeft className="w-6 h-6" />
                ) : (
                    <ChevronRight className="w-6 h-6" />
                )
                }
            </Button>
            <div>
                <div className=" h-20 flex flex-col items-center">
                        <Image
                            src='/logoDash.svg'
                            width={140}
                            height={140}
                            alt="aaa"
                            className={`${isOpen ? 'hidden sm:block' : '!hidden'}`}
                        />
                </div>
                <ul className="p-4 mt-8">
                    {menuItems.map((item) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <li key={item.id}>
                                <CustomLink href={item.link} nome={item.title}>
                                    <Icon />
                                    <span className={`${isOpen ? 'hidden sm:block' : '!hidden'}`}>
                                        {item.title}
                                    </span>
                                </CustomLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}