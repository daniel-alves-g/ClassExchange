import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "@/context/search";
import { AuthProvider } from "@/providers/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduExChange",
  description: "Software de Troca e Substituição de aulas",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <SearchContextProvider>
        <html lang="pt-BR">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </SearchContextProvider>
    </AuthProvider>
  );
}
