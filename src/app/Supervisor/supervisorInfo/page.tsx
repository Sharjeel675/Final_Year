"use client";
import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/img/1.jpg";
import img2 from "@/img/2.jpg";
import img3 from "@/img/3.jpg";
import img4 from "@/img/4.jpg";
import img5 from "@/img/5.jpg";
import img6 from "@/img/6.jpg";
import img7 from "@/img/7.jpg";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";

const SupervisorInfo = () => {
  const [open, setOpen] = useState(false);
  const [text, settext] = useState("More");
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  let teacherOj = [
    {
      imag: img1,
      nameTeacher: "Mr Ameen Khowaja",
      descFirst:
        "Mr. Ameen obtained his MS degree in Computer Science and IT from NED University of Engineering and Technology Karachi",
      descSec:
        " He is a Ph.D. scholar and has over 7 years of teaching and research experience. He is also associated with the ORIC Department of SMI University as a faculty coordinator. He has published 17 research papers in HEC-recognized international journals. Mr Ameen has supervised more than 20 undergraduates’ final year projects in the domain of Artificial Intelligence, Mobile Application developments, and Web developments. His research interests include Natural Language Processing, Artificial Intelligence, Deep Learning, Digital Image Processing, and Knowledge Base Systems",
    },
    {
      imag: img2,
      nameTeacher: "Dr. Asif Ai Wagan",
      descFirst:
        "Dr. Asif Ai Wagan has earned his PhD in Information Technology from University Technology PETRONAS, Malaysia. Dr. Wagan has more than 10 years of professional experience in teaching and research. Dr. Wagan has experience of working with Hitachi, Japan and Realityone Sensor, Singapore",
      descSec:
        " He is author of 18 international journals/conferences articles. His research interest includes wireless communication, network security, software-defined networking, big data, and data mining.",
    },
    {
      imag: img7,
      nameTeacher: "Dr. Asif Ali Laghari",
      descFirst:
        "Dr. Asif Ali Laghari earned his Ph.D. in Computer Science & Technology from Harbin Institute of Technology (HIT), China in 2019.",
      descSec:
        " He is the author of over 55 research articles in HEC recognized and impact factor journals, conferences and two book chapters of international repute. His research interests include Cloud Computing, Quality of Experience, Multimedia streaming, Fog computing and Social Networking.",
    },
    {
      imag: img4,
      nameTeacher: "Dr. Haque Nawaz Lashari",
      descFirst:
        "Dr. Haque Nawaz Lashari has earned his Doctor of Philosophy, Ph.D. in Computer Science from Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Karachi, Pakistan in 2021.",
      descSec:
        " He is author of 44 published research papers in national/ international HEC recognized, Impact Factor, ISI, Scopus, Journals, and IEEE conferences. His field of interests include Network technologies, Networks and communication, wireless Networks and communication, IoT, Ad Hoc Networks, MANET, VANET, UAVCN, Routing Protocols, Efficient routing and Power Algorithms, UAVs Communication, UAVs Communication Algorithms, UAVCN Routing, QoS, and Security.",
    },
    {
      imag: img5,
      nameTeacher: "Dr. Sarmad",
      descFirst:
        "Dr. Sarmad has completed PhD in Information Technology with distinction from Alpen-Adria University, Klagenfurt, Austria, in 2018.",
      descSec:
        " He has more than 7 years of academic and professional research experience in the field of RF/microwave engineering and antenna designing. He has also done significant research work at Cambridge University, UK for a short period of time. He has published multiple research papers in international and ISI indexed journals, conferences, and workshops. Currently, he is also working as editor-in-chief of an international journal and reviewer for HEC research grants proposals and various well-known international journals and conferences. Dr Sarmad has been associated with SMIU since February 2020. His research interests include RF/microwave engineering, smart antenna arrays design, radio localization (DoA/AoA/ToA/RSSI), radar systems, wireless networking and artificial intelligence",
    },
    {
      imag: img6,
      nameTeacher: "Dr. Rind",
      descFirst:
        "Dr. Rind has around 20 years of diversified industry, academia, research, and administrative experience at renowned national and multinational institutes/organizations.",
      descSec:
        " He has recently completed his 3 years’ tenure as a Head of Computer Science Department at SMI, university. He earned his PhD in Information Technology (I.T) from International Islamic University Malaysia, ME (Communication Systems and Networks), and BE (Computer systems) from Mehran University of Engineering and Technology, Jamshoro, Pakistan. Additionally, he is CCNA, CCNP (Routing & Switching), Juniper (JNCIA-ER, JNCIA-EX, JNCIA-JUNOS, JNCIS-SEC, JNCIS-ER) certified. He also attended various technical and professional trainings at UAE, Malaysia and Pakistan. Dr. Rind is an active reviewer of numerous national and international journals/conferences and also member of different statutory bodies of SMIU and other universities in Pakistan. He is author of one book and has contributed (published and presented) over 40 research articles in various ISI, Scopus, IEEE, HEC recognized journals and international conferences. His research interests include Artificial Intelligence, Software Defined Networking, Cloud Computing, Information Systems, Cyber Security, Internet of Things, Machine Learning, Data Communication. He is actively involved in supervising, BS, MS and Ph.D research projects.",
    },
  ];

  return (
    <>
      {" "}
      <SuperviserNavbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 ">
                Supervisor Selection Page
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {teacherOj.map((e: any) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <Image
                      src={e.imag}
                      alt="img"
                      className="object-cover object-center h-full w-full"
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 ">
                    {e.nameTeacher}{" "}
                  </h2>
                  <p
                    className={
                      open
                        ? "text-base leading-relaxed mt-5 h-25 overflow-y-scroll h-44"
                        : "text-base leading-relaxed mt-5 h-25"
                    }
                  >
                    {e.descFirst}
                    <span className={open ? "flex" : "hidden"}>
                      {e.descSec}
                    </span>
                  </p>
                  <a
                    className="text-indigo-500 inline-flex items-center mt-3"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
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
              );
            })}
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default SupervisorInfo;
