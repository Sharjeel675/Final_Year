"use client";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import { useState } from "react";

const studentsIGroup = () => {
  const [SupervisorName, setSupervisorName] = useState("");
  const [Password, setPassword] = useState("");
  const [FilterName, setFilterName] = useState("");

  const profile = [
    {
      name: "Dr. Asif Ai Wagan",
      password: "asif ali",
    },
    {
      name: "Dr. Asif Ali Laghari",
      password: "asifwagan12",
    },
  ];
  const students = [
    {
      teacher: "Dr. Asif Ai Wagan",
      project: "asif ali",
    },
    {
      teacher: "Dr. Asif Ai Wagan",
      project: "asif ali",
    },
    {
      teacher: "Dr. Asif Ai Laghari",
      project: "asif ali",
    },
  ];

  let studentsData = students.filter((e) => {
    return e.teacher == FilterName;
  });

  return (
    <>
      <SuperviserNavbar />{" "}
      <div className="w-3/4 mx-auto flex justify-between mt-12">
        <form
          onSubmit={(e) => {
            profile.map((e: any) => {
              if (e.name == SupervisorName && e.password == Password) {
                setFilterName(SupervisorName);
              }
            });
          }}
          className="w-1/2"
        >
          {" "}
          <select
            name="teachersName"
            id="teachersName"
            className="bg-gray-200 block w-full"
            onChange={(e) => setSupervisorName(e.target.value)}
          >
            <option value="Sir Ameen Khuwaja">Sir Ameen Khuwaja</option>
            <option value="Dr. Asif Ai Wagan">Dr. Asif Ai Wagan</option>
            <option value="Dr. Asif Ali Laghari">Dr. Asif Ali Laghari</option>
            <option value="Dr. Haque Nawaz Lashari">
              Dr. Haque Nawaz Lashari{" "}
            </option>
            <option value="Dr. Sarmad">Dr. Sarmad </option>
            <option value="Dr. Rind">Dr. Rind </option>
          </select>
          <input
            type="text"
            placeholder="enter paswaord"
            className="border-2 border-sky-600 w-full mt-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          onClick={(e) => {
            profile.map((e: any) => {
              if (e.name == SupervisorName && e.password == Password) {
                setFilterName(SupervisorName);
              }
            });
          }}
        >
          {" "}
          submit
        </button>
      </div>
      {studentsData.map((e) => {
        return (
          <>
            <div>{e.teacher}</div>
            <div>{e.project}</div>
          </>
        );
      })}
    </>
  );
};

export default studentsIGroup;
