// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const Teachers = () => {
//   const [open, setOpen] = useState(false);
//   const [text, settext] = useState("More");
//   return (
//     <section id="Supervisor_Detail" className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col">
//           <div className="h-1 bg-gray-200 rounded overflow-hidden">
//             <div className="w-24 h-full bg-indigo-500" />
//           </div>
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//             <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
//               This is Supervisor Detail Page
//             </h1>
//             <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
//              All SMIU Supervisor are availabe in this page..
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
//             <div className="rounded-lg h-64 overflow-hidden">
//               <Image
//                 src={require("../../../img/1.jpg")}
//                 alt="img"
//                 className="object-cover object-center h-full w-full"
//               />
//             </div>
//             <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
//               Mr Ameen Khowaja
//             </h2>
//             <p className="text-base leading-relaxed mt-5 h-25 overflow-y-scroll ">
//               Mr. Ameen obtained his MS degree in Computer Science and IT from
//               NED University of Engineering and Technology Karachi.
//               <span className={open ? "flex" : "hidden"}>
//                 He is a Ph.D. scholar and has over 7 years of teaching and
//                 research experience. He is also associated with the ORIC
//                 Department of SMI University as a faculty coordinator. He has
//                 published 17 research papers in HEC-recognized international
//                 journals. Mr Ameen has supervised more than 20 undergraduates’
//                 final year projects in the domain of Artificial Intelligence,
//                 Mobile Application developments, and Web developments. His
//                 research interests include Natural Language Processing,
//                 Artificial Intelligence, Deep Learning, Digital Image
//                 Processing, and Knowledge Base Systems
//               </span>
//             </p>

//             <a
//               onClick={() => {
//                 setOpen(!open);
//               }}
//               className="text-indigo-500 inline-flex items-center mt-3"
//             >
//               {open ? "Learn less" : "Learn More"}
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-4 h-4 ml-2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </a>
//           </div>
//           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
//             <div className="rounded-lg h-64 overflow-hidden">
//               <Image
//                 src={require("../../../img/2.jpg")}
//                 alt="img"
//                 className="object-cover object-center h-full w-full"
//               />
//             </div>
//             <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
//               The Catalyzer
//             </h2>
//             <p className="text-base leading-relaxed mt-2">
//               Swag shoivdigoitch literally meditation subway tile tumblr
//               cold-pressed. Gastropub street art beard dreamcatcher neutra,
//               ethical XOXO lumbersexual.
//             </p>
//             <a className="text-indigo-500 inline-flex items-center mt-3">
//               Learn More
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-4 h-4 ml-2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </a>
//           </div>
//           <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
//             <div className="rounded-lg h-64 overflow-hidden">
//               <Image
//                 src={require("../../../img/4.jpg")}
//                 alt="img"
//                 className="object-cover object-center h-full w-full"
//               />
//             </div>
//             <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
//               The 400 Blows
//             </h2>
//             <p className="text-base leading-relaxed mt-2">
//               Swag shoivdigoitch literally meditation subway tile tumblr
//               cold-pressed. Gastropub street art beard dreamcatcher neutra,
//               ethical XOXO lumbersexual.
//             </p>
//             <a className="text-indigo-500 inline-flex items-center mt-3">
//               Learn More
//               <svg
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-4 h-4 ml-2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Teachers;

import React from 'react'

const Teachers = () => {
  return (
    <div>Teachers</div>
  )
}

export default Teachers
