import { NextRequest,NextResponse } from "next/server";

export async function POST (request : NextRequest){
    // console.log(request)
    const res = await request.json()
    console.log(res)
    return NextResponse.json({ status: 200, message:"success" })
}