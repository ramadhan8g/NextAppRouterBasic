"use client"

import React, { useState } from 'react'

export default function adminProductPage  () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [status, setStatus] = useState("");

    const revalidate = async()=>{
        // jika token salah ada eror
        const res = await fetch ("http://localhost:3000/api/revalidate?tag=product&secret=12345678",{
            method:"POST",
        })

        if(!res.ok){
            setStatus("revalidate failed")
        }else{
            const response = await res.json()
            if(response.revalidate){
                setStatus("revalidate success")
            }
            // console.log(await res.json())
        }
    
       
      
    }
   
    return (
        <div className='w-3/6 h-96 bg-gray-400 rounded-[12px] flex justify-center items-center mr-5'>
            <h1>{status}</h1>
            <button className='bg-black text-white p-3 m-5' onClick={()=> revalidate ()}>
            revalidate
            </button>
        </div>
    )

    }
