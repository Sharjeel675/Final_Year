import {  ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import React from 'react'
import { Badge } from "@/components/ui/badge"
import Supervisor from './Supervisor'



const Hero = () => {
  return (
    <div>
        <div>
      <section className="text-black-600 body-font pt-10">
        <Badge className=' py-3 px-5 rounded-lg bg-blue-100 text-blue-700  mx-7 text-2xl' variant="outline">Apply Now!</Badge>
        

        <div className='flex flex-col gap-y-10 lg:flex-row px-6 py-8 flex-1'>
          {/* left-side */}
          <div>


            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl ">
            Welcome To
            Sindh Madressatul Islam University (SMIU)
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 lg:text-2xl">
            Sindh Madressatul Islam University (SMIU) is a chartered University duly recognized by the Higher Education Commission of Pakistan. It is one of the oldest institutions in South Asia, which started as a school in 1885, became a college in 1943 and a university in February 2012.
            </p>
            <div className='flex items-center'>
 
            <Button className='mt-4 py-9 text-2xl'><ShoppingCart /> Supervisor-Detail
             </Button>
            
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-40 w-50 rounded-full bg-[#ffece3] ">
            <Image src={require('../../src/img/13254460_710745915734761_8157428650049174152_n.png')} alt='img' />
          </div>
        </div>

        {/* Promotion */}

       <div className=' flex items-center'>
       



       </div>
      </section>

    </div>
      
    </div>
  )
}

export default Hero
