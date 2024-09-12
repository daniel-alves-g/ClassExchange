import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
    Bell,
    CreditCard,
    LogOut,
    Search,
    Settings,
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator, 
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "../ui/input";



export default function DashNavbar() {
    const { data: session } = useSession()
    return (
        <section className="py-3 px-5 border-b-[1px]">
            <div className="container flex justify-between items-center">
                <div className="relative md:grow-0">
                    <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Pesquisar..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[160px] lg:w-[250px]"
                    />
                </div>

                <div className="flex gap-x-3 items-center">
                    <Bell />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex gap-x-2 p-2 items-center border-[1px] rounded-lg hover:cursor-pointer">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <p className="font-bold text-sm text-black">{session?.user?.name}</p>
                                    <p className="text-[10px]">{session?.user?.email}</p>
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Perfil</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Configurações</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem disabled>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Pagamentos</span>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500" onClick={() => signOut()}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Sair</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


                {/* 
            <Card>
                
            </Card>
            */}
            </div>
        </section>
    )
}