'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Link from "next/link"


export default function Login() {
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password
            })

            if (!response?.error) {
                router.refresh()
                router.push('/dashboard')
            } else {
                setError('Email ou Senha incorretos, verifique e tente novamente')
            }
        } catch (error) {
            console.log("[LOGIN_ERROR]: ", error)
        }
    }

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center bg-white">
                <div className="">
                    
                </div>
                    <form className="p-10 border rounded-lg w-96 bg-hero-image" onSubmit={handleLogin}>
                    <h1 className="text-3xl font-bold mb-4">Login</h1>
                    <p className="text-sm text-gray-600 mb-10">Faça login para Continuar</p>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-1 mb-6">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                            />
                        </div>
                        <div className="flex flex-col gap-1 mb-6">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                            />
                        </div>
                        {
                            error &&
                            <Alert variant="destructive" className="mb-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>
                                    {error}
                                </AlertDescription>
                            </Alert>
                        }

                        <Button type="submit" className="font-semibold text-xl"> Entrar </Button>
                    </div>
                </form>
                <Link href='/'>
                    <Button className="text-lg">
                        Voltar a Home
                    </Button>
                </Link>
            </div>
        </>
    )
}