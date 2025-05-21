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
};

const initialFormData: TeamMember = {
  StudentId: 0,
  name: "",
  fatherName: "",
  mail: "",
  department: "",
  gender: "",
};

export default function TeamFormPopup() {
  const [formData, setFormData] = useState<TeamMember>(initialFormData);
  const [isFormHidden, setIsFormHidden] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [supervisorName, setSupervisorName] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

  };

  const handleAddMember = () => {
    const isValid = Object.entries(formData).every(
      ([key, value]) => value !== "" && value !== 0
    );

    if (!isValid) {
      alert("Please fill in all fields before adding a member.");
      return;
    }

    setTeamMembers((prev) => [...prev, formData]);
    setFormData(initialFormData);
    setIsFormHidden(true);
  };

  return (
    <>

      <div className="flex flex-row items-center  justify-center h-screen">
        <div className="w-1/2 p-4">
          <label htmlFor="projecttitle " className="bloxk">Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            name="projecttitle"
            placeholder="project title"
            className="block w-1/2 border-2 border-blue-400 p-2 rounded-md my-4"
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


          <p className="text-lg ">Team Members</p>
          {teamMembers.map((member, index) => (
            <>
              <div key={index} className="flex flex-col mb-4 bg-gray-100 p-2 rounded-md shadow-sm">
                <p className="text-lg font-semibold">{member.name}</p>
                <p>Father Name: {member.fatherName}</p>
                <p>Email: {member.mail}</p>
                <p>Student ID: {member.StudentId}</p>
                <p>Department: {member.department}</p>
              </div>
            </>))}


          < button
            onClick={() => setIsFormHidden(false)}
            className="px-4 py-2 bg-green-500 text-white rounded block mt-2"
          >
            Open Form
          </button >
          < button
            onClick={async () => {
              await SubmitStudentForm(teamMembers, supervisorName, projectTitle)
              setSupervisorName("")
              setProjectTitle("")
              setTeamMembers([])
              
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

      <div
        className={
          isFormHidden
            ? "hidden"
            : "block bg-black/30 backdrop-blur-sm p-4 rounded-md mb-4 fixed h-screen w-full top-0 left-0 flex items-center justify-center z-50"
        }
      >
        <div className="bg-white w-1/2 p-6 rounded shadow-lg">
          <h2 className="text-lg font-bold mb-4">Add Team Member</h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mb-2 w-full p-2 border rounded"
          />

          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father Name"
            className="mb-2 w-full p-2 border rounded"
          />

          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            placeholder="Email"
            className="mb-2 w-full p-2 border rounded"
          />

          <input
            type="number"
            name="StudentId"
            value={formData.StudentId}
            onChange={handleChange}
            placeholder="Student ID"
            className="mb-2 w-full p-2 border rounded"
          />

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="mb-2 w-full p-2 border rounded"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mb-4 w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsFormHidden(true)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleAddMember}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Member
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
