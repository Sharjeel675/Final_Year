"use client"; import Link from 'next/link'
import React, { useState } from 'react'
import Signup from './Signup';
import { DropdownMenu } from './ui/dropdown-menu';


const Header = () => {
  
  return (
    <header className="text-gray-600 body-font bg-slate-100 relative">

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl font-extrabold">Final year Project Management System</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex justify-between items-center text-base text-1xl gap-x-5">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/Supervisor'} className="mr-5 hover:text-gray-900">Supervisor</Link>
          <Link href={'/Form'} className="mr-5 hover:text-gray-900">Teachers-Form</Link>
          <Link href={'/Project-Detail'} className="mr-5 hover:text-gray-900">Project-Detail</Link>
        </nav>
        <button>
          <Signup/>
          {/* <DropdownMenuDemo/> */}
      
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div> 
    </header>

  )
}

export default Header