import { retrieveData, retrieveDataById } from "@/lib/firebase/service"
import { NextRequest, NextResponse } from "next/server"
const data = [
    {
        id:1,
        name: "sepatu Nike 200",
        price: 350000,
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        id:2,
        name: "sepatu Nike",
        price: 380000,
        image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75a40aac-a2aa-489d-bc44-b7b264b57aa3/air-max-plus-og-shoes-zN9XDM.png"
    },  {
        id:3,
        name: "sepatu Adidas",
        price: 320000,
        image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db683a69-e9ad-476b-972e-a81b8a533df9/air-max-plus-shoes-SWRML2.png"
    },
]

// request utk parameter id d link 
export async function GET(request: NextRequest) {
    // console.log(request)
    // ambil seacthparam yg id=1 dari link http://localhost:3000/api/product?id=1
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')

    // console.log(id)
    // jika ada http://localhost:3000/api/product?id=1 tmpil 1 data jika  http://localhost:3000/api/product tampil smua data
    if(id){
        // const detailProduct = data.find(item => item.id === Number( id))
        const detailProduct = await retrieveDataById('products', id)
       if(detailProduct){
        return NextResponse.json({ name: 'John Doe', status: 200, message:"success", data:detailProduct })
        }

       return NextResponse.json({ status: 404, message:"not found", data:{} })
    }
    
    const products = await retrieveData('products')
    
    return NextResponse.json({ name: 'John Doe', status: 200, message:"success", data:products})
}