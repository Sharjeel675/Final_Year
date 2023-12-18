
import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
      <span className="ml-3 text-xl">ksharjeel675@gmail.com</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 @ksharjeel675@gmail.com 
    
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={'https://www.facebook.com/sharjeelahmed.khan.39?mibextid=ZbWKwLhttps://www.facebook.com/sharjeelahmed.khan.39?mibextid=ZbWKwL'} className="text-blue-600">
      <FaFacebook/>
      </Link>
    
      <Link target='_blank' href={'https://instagram.com/sharjeel_ahmed_khan23?igshid=MzNlNGNkZWQ4Mg=='} className="ml-3 text-red-600">
        <BsInstagram/>
      </Link>
      <Link  target='_blank' href="https://www.linkedin.com/in/sharjeel-ahmed-khan-726694234" className="ml-3 text-blue-600">
       <AiFillLinkedin/>
      </Link>
    </span>
  </div>
</footer>

      
    </div>
  )
}

export default Footer

