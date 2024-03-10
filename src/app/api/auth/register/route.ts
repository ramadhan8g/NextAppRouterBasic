

import { register } from "@/lib/firebase/service";
import { NextRequest,NextResponse } from "next/server";

export async function POST (request : NextRequest){
    // console.log(request)
    const req = await request.json()
    const res = await register(req)
    console.log(req)
    return NextResponse.json(
        { status: res.status, message:res.message },
        { status: res.statusCode }
    )
}