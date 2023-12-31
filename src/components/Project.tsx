import FetchingFormData from "./fetchingFormData";
import { useState } from "react";

const Project = async () => {
   return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Project-Detail Form
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
          <FetchingFormData   />
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto h-25 overflow-y-scroll leading-relax h-50">
        </div>
        {/* <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <a
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
           >
            Learn More
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
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Project;
  