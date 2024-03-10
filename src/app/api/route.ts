import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto


export async function GET(request: Request) {
    return NextResponse.json({ name: 'John Doe', status: 200, message:"success" })
}