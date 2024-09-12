'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { CustomLinksProps } from "@/types";

export default function CustomLink({ href, children, nome}: CustomLinksProps ) {
    const pathName = usePathname();

    const isActive = href === '/dashboard' ? pathName === '/' : pathName.startsWith(href)
    return (
        <Button asChild className={`${isActive ? 'bg-primary' : 'bg-gray-700'} w-full flex items-center justify-start gap-3 mb-4 text-gray-100`}>
            <Link href={href} aria-label={nome}>{children}</Link>
        </Button>
    );
}