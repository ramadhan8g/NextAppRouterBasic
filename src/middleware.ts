import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware (request : NextRequest) {
    // const isLogin = true

    // if(!isLogin){
    //     // rewrite :  
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
    const res = NextResponse.next()
    return res
}

export default  withAuth(middleware,[
    '/dashboard',
    '/profile',
    '/login',
    'register',
])
    // yg d middleware, g bsa masuk dan akan teredirect ke login karena is login false
    // matcher: ['/dashboard/:path*',"/about"] 
