"use client";

import React from "react";
import Link from "next/link";
// pathname : hooks mengecek
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";



const Navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {data:session, status} : {data:any ; status:string} = useSession()
  return (
    <nav className="flex bg-gray-900 py-4">
      <div className="flex justify-between items-center w-full px-5" >

        <div className="flex ">
          <h1 className="text-white">navbar</h1>
          <ul className="flex ml-5">

            <Link href="/">
              {/* klo pathname ada d slash muncul text blue*/}
              <li
                className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"
                  } cursor-pointer`}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"
                  } cursor-pointer`}
              >
                About
              </li>
            </Link>
            <Link href="/about/profile">
              <li className="mr-3 text-blue-300 cursor-pointer">Profile</li>
            </Link>
          </ul>
        </div>
        <div>

          {status === 'authenticated' ? (
            <div className="flex  justify-end">
              <h4 className="text-white mr-5">{session?.user?.fullname}</h4>
              <button type="button" className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <button type="button" className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
              onClick={() => signIn("google")}
            >
              Login
            </button>
          )


          }


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
