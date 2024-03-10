"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


import React, { useEffect } from 'react'

export default function  DashboardPage  () {
  const {data:session, status} : {data:any; status:string} = useSession()
  console.log(session)
  console.log(status)

  const router = useRouter();
  useEffect(() => {
   if(status === "unauthenticated" && session?.user?.role !== "admin"){
    router.push("/login") 
   }else{
    if (session !== undefined && session?.user?.role === "admin") {
      router.push("/")
    }
  }
  }, [router,session,session?.user.role, status])
  
  return(
<div className='w-full h-96 bg-gray-400 rounded-[12px] flex justify-center items-center:'><p>Dashboard</p></div>
  )
    
  
}

