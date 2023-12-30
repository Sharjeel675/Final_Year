"use client";

import Image from "next/image";
import React, { useState } from "react";
import formImage from "../img/Graduate.jpg";

const teachers = ["Ameen kh", "", "Teacher 3"];
const projects = ["Project A", "Project B", "Project C"];
const departments = [
  "Software Engineering",
  "Computer Science",
  "Artificial Intelligence",
  "Cyber Security",
  "Data Science",
];

const Form = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mail, setMail] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [ProjectTitle, setProjectTitle] = useState("");
  const [StudentId, setStudentId] = useState("");
  const [SupervisorName, setSupervisorName] = useState("");
  console.log(
    name,
    fatherName,
    mail,
    department,
    gender,
    ProjectTitle,
    StudentId,
    SupervisorName,
    "asasasasasas"
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const api = await fetch("/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fatherName,
        mail,
        department,
        ProjectTitle,
        StudentId,
        SupervisorName,
        gender,
      }),
    });
    alert("Your Form Has Been Submited");
    setName("");
  };

  return (
    <div className="flex">
      <div className=" lg:w-2/3 w-full mt-10 p-4 bg-white shadow-md rounded-md ">
        <h1 className="text-2xl font-bold mb-4">Teachers Selection Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Father's Name:
            </label>
            <input
              type="text"
              name="fatherName"
              value={fatherName}
              onChange={(e: any) => setFatherName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Add the teacher selection dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Supervisor Name
            </label>
            <input
              type="text"
              name="supervisorBhand"
              value={SupervisorName}
              onChange={(e: any) => setSupervisorName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Student ID*/}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Student ID
            </label>
            <input
              type="text"
              name="StudentId"
              value={StudentId}
              onChange={(e: any) => setStudentId(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Student Gmail*/}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Student Email
            </label>
            <input
              type="text"
              name="Email"
              value={mail}
              onChange={(e: any) => setMail(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Project Title
            </label>
            <input
              type="text"
              name="fatherName"
              value={ProjectTitle}
              onChange={(e: any) => setProjectTitle(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>

          {/* Add the student department radio buttons */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Student Dept:
            </label>
            {departments.map((department, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name="selectedDepartment"
                  value={department}
                  onClick={(e: any) => setDepartment(e.target.value)}
                  className="mr-2"
                />
                <span>{department}</span>
              </div>
            ))}
          </div>

          {/* Add the student gender radio buttons */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Student Gender:
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                name="selectedGender"
                value="Female"
                onClick={(e: any) => setGender("Female")}
                className="mr-2"
              />
              <span>Female</span>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="selectedGender"
                value="Male"
                onClick={(e: any) => setGender("Male")}
                className="mr-2"
              />
              <span>Male</span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>{" "}
      <Image src={formImage} alt="img" className="w-1/2"/>
    </div>
  );
};

export default Form;
