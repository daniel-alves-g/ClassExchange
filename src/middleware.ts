import withAuth, { NextAuthMiddlewareOptions, NextRequestWithAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const middleware = (request: NextRequestWithAuth) => {
    console.log('[MIDDLEWARE_TOKEN]: ', request.nextauth.token)

    const isPrivateRoutes = request.nextUrl.pathname.startsWith('/dashboard')
    const allowedRoles = ['admin', 'diretor', 'coordenador', 'professor']
    const userRole = request.nextauth.token?.role as string | undefined

    if (isPrivateRoutes && (!userRole || !allowedRoles.includes(userRole))) {
        return NextResponse.rewrite(new URL('/denied', request.url))
    }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
    matcher: ['/dashboard/:path*'],
}