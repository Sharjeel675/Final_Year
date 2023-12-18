"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Supervisor = () => {
    const [open, setOpen] = useState(false);
    const [text, settext] = useState("More");

    const toggleText = () => {
        setOpen(!open);
        settext(open ? "Learn More" : "Learn Less");
      };

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
          Supervisor Selection Page
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
          This is Supervisor Selection Page
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
                src={require("../../src/img/1.jpg")}
                alt="img"
                className="object-cover object-center h-full w-full"
              />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 ">
          Mr Ameen Khowaja
        </h2>
        <p className="text-base leading-relaxed mt-5 h-25 overflow-y-scroll ">
        Mr. Ameen obtained his MS degree in Computer Science and IT from
               NED University of Engineering and Technology Karachi.
               <span className={open ? "flex" : "hidden"}>
                 He is a Ph.D. scholar and has over 7 years of teaching and
                 research experience. He is also associated with the ORIC
                 Department of SMI University as a faculty coordinator. He has
                 published 17 research papers in HEC-recognized international
                 journals. Mr Ameen has supervised more than 20 undergraduates’
                 final year projects in the domain of Artificial Intelligence,
                Mobile Application developments, and Web developments. His
                 research interests include Natural Language Processing,
                 Artificial Intelligence, Deep Learning, Digital Image
                 Processing, and Knowledge Base Systems
              </span>
              </p>
             

              <a className="text-indigo-500 inline-flex items-center mt-3" onClick={toggleText}>
        {text}
          
         
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
                src={require("../../src/img/2.jpg")}
                alt="img"
                className="object-cover object-center h-full w-full"
              />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Ms. Nazia Ashraf
        </h2>
        <p className="text-base leading-relaxed mt-5 h-25 overflow-y-scroll ">
        Ms. Nazia obtained M.E in Computer Systems from NED University of Engineering & Technology, Karachi in 2012 and
               <span className={open ? "flex" : "hidden"}>
               Ms. Nazia obtained M.E in Computer Systems from NED University of Engineering & Technology, Karachi in 2012 and BS in Computer Engineering from Sir Syed University of Engineering & Technology, 
               Karachi. She has teaching experience of more than 3 years at SMIU and 3 years in other institutions. Her areas of interest are Data Structures, Software Engineering, Databases, Computer Organization and Computer Vision.
                She is currently enrolled in PhD (CS) program at Bahria University, Karachi.
              </span>
              </p>
             

              <a className="text-indigo-500 inline-flex items-center mt-3" onClick={toggleText}>
        {text}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
                src={require("../../src/img/4.jpg")}
                alt="img"
                className="object-cover object-center h-full w-full"
              />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          The 400 Blows
        </h2>
        <p className="text-base leading-relaxed mt-5 h-25 overflow-y-scroll ">
        Dr. Haque Nawaz Lashari has earned his Doctor of Philosophy,
                Ph.D. in Computer Science from Shaheed Zulfikar Ali Bhutto Institute of Science and Technology 
                (SZABIST), Karachi, Pakistan in 2021.
               <span className={open ? "flex" : "hidden"}>
               . He has been associated with teaching and training since 
                2006. He is author of 44 published research papers in national/ international HEC recognized,
                 Impact Factor, ISI, Scopus, Journals, and IEEE conferences. His field of interests include
                  Network technologies, Networks and communication, wireless Networks and communication, IoT,
                   Ad Hoc Networks, MANET, VANET, UAVCN, Routing Protocols, Efficient routing and Power 
                   Algorithms, UAVs Communication, UAVs Communication Algorithms, UAVCN Routing, QoS, and Security.
              </span>
              </p>
             

              <a className="text-indigo-500 inline-flex items-center mt-3" onClick={toggleText}>
        {text}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Supervisor