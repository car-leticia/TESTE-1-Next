import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest){
    
    const authenticated = false;

    if(request.nextUrl.pathname.startsWith('/Dashboard')&& !authenticated){
        console.log("Acesso Negado!")
        return NextResponse.redirect(new URL('/', request.url))
    }
        
    return NextResponse.next()

}

