import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST (request : NextRequest){
    // console.log(request)
    const tag = request.nextUrl.searchParams.get('tag')
    const secret = request.nextUrl.searchParams.get('secret')

    if(secret !== "12345678"){
        return NextResponse.json({ status: 401, message:"Invalid Secret" },{status:401})
    }

    if (!tag){
        return NextResponse.json({ status: 400, message:"Missing Tag Params" },{status:400})
    }
    // tag mana yg mau d revalidate
    revalidateTag(tag)
    return NextResponse.json({ revalidate:true, now:Date.now })
}