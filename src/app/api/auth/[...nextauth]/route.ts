import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

const users = [
    {
        id: '1',
        email: 'admin@gmail.com',
        password: '123',
        name: 'Administrador sistema',
        role: 'admin'
    },
    {
        id: '2',
        email: 'diretor@gmail.com',
        password: '123',
        name: 'Diretor do Campus',
        role: 'diretor'
    },
    {
        id: '3',
        email: 'coordenador@gmail.com',
        password: '123',
        name: 'Coordenador do Curso',
        role: 'coordenador'
    },
    {
        id: '4',
        email: 'professor@gmail.com',
        password: '123',
        name: 'Professor do Curso',
        role: 'professor'
    }
]

const authOptions: NextAuthOptions = {
    providers: [
        CredentialProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = users.find(
                    user => user.email === credentials?.email && user.password === credentials?.password
                )

                if (!user) {
                    return null
                }
                return user
            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            const customUser = user as unknown as any

            if (user) {
                return {
                    ...token,
                    role: customUser.role
                }
            }

            return token
        },
        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user, // mantém os dados já presentes, como name e email
                    role: token.role // adiciona a role
                }
            }
        }
    },
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
