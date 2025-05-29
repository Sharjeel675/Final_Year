import React, { useState } from "react";
import formImage from "../img/Graduate.jpg";
import Image from "next/image";
import SubmitStudentForm from "@/Supabase/StudentForm";
type TeamMember = {
  StudentId: number;
  name: string;
  fatherName: string;
  mail: string;
  department: string;
  gender: string;
  member1: string;
  member2: string;
};

const initialFormData: TeamMember = {
  StudentId: 0,
  name: "",
  fatherName: "",
  mail: "",
  department: "",
  gender: "",
  member1: "",
  member2: "",
};

export default function TeamFormPopup() {
  const [projectTitle, setProjectTitle] = useState("");
  const [supervisorName, setSupervisorName] = useState("Sir Ameen Khuwaja");
  const [formData, setFormData] = useState<TeamMember>(initialFormData);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }



  return (
    <>

      <div className="flex flex-row items-center  justify-center h-screen">
        <div className="w-1/2 p-4">

          <label htmlFor="name" >Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-2 w-full p-2 border rounded"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 w-full p-2 border rounded"
          />

          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="mb-2 w-full p-2 border rounded"
          />


          <label htmlFor="projecttitle " className="bloxk">Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            name="projecttitle"
            placeholder="project title"
            className="block w-1/2 border-2 border-blue-400 p-2 rounded-md "
          />

          <label htmlFor="supervisor">Supervisor name</label>
          <select
            name="teachersName"
            id="teachersName"
            className="bg-gray-200 w-full mr-12 my-3"
            onChange={(e) => setSupervisorName(e.target.value)} >
            <option value="Sir Ameen Khuwaja">Sir Ameen Khuwaja</option>
            <option value="Dr. Asif Ai Wagan">Dr. Asif Ai Wagan</option>
            <option value="Dr. Asif Ali Laghari">Dr. Asif Ali Laghari</option>
            <option value="Dr. Haque Nawaz Lashari">
              Dr. Haque Nawaz Lashari{" "}
            </option>
            <option value="Dr. Sarmad">Dr. Sarmad </option>
            <option value="Dr. Rind">Dr. Rind </option>
          </select>

          <label htmlFor="member1">Member 1 Name</label>
          <input
            type="text"
            value={formData.member1}
            onChange={handleChange}
            name="member1"
            placeholder="Member 1 Name"
            className="block w-1/2 border-2 border-blue-400 p-2 rounded-md "
          />

          <label htmlFor="member1">Member 2 Name</label>
          <input
            type="text"
            value={formData.member2}
            onChange={handleChange}
            name="member2"
            placeholder="Member 1 Name"
            className="block w-1/2 border-2 border-blue-400 p-2 rounded-md "
          />






          < button
            onClick={async () => {
              if (!projectTitle || !formData.name || !formData.mail || !formData.department || !formData.member1 || !formData.member2) {
                alert("Please fill all fields");
                return
              }
              await SubmitStudentForm([formData], supervisorName, projectTitle)
              setProjectTitle("")
              setFormData(initialFormData);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded mt-6"
          >
            Submit form
          </button >
        </div >
        <div className="w-1/2">

          <Image
            src={formImage}
            alt="Form Image"
            className="w-full h-screen"
          />
        </div>
      </div >

    </>
  );
}
