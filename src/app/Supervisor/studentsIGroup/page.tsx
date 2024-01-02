"use client";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import { useEffect, useState } from "react";
const dataFetch = async () => {
  const data = await fetch("/api/project");
  const jsonDta = await data.json();
  return jsonDta;
};
const studentsIGroup = () => {
  const [SupervisorName, setSupervisorName] = useState("");
  const [Password, setPassword] = useState("");
  const [FilterName, setFilterName] = useState("");
  const [apiData, setApiData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      setApiData(data.result.rows);
    };
    fetchData();
  }, []);
 
  const profile = [
    {
      name: "Dr. Asif Ai Wagan",
      password: "asif ali 123",
    },
    {
      name: "Dr. Asif Ali Laghari",
      password: "langhari321",
    },
    {
      name: "Mr Ameen Khowaja",
      password: "ameenK3321",
    },
    {
      name: "Dr. Sarmad",
      password: "sarmad123",
    },
    {
      name: "Dr. Haque Nawaz Lashari",
      password: "nawaz123",
    },
    {
      name: "Dr. Rind",
      password: "rind123",
    },
  ];
  let studentsData = apiData.filter((e) => {
    return e.supervisorname == FilterName;
  });
  return (
    <>
      <SuperviserNavbar />{" "}
      <div className="w-3/4 mx-auto flex justify-between mt-12">
        <form
          onSubmit={(e) => {
            apiData.map((e: any) => {
              if (
                e.supervisorname == SupervisorName &&
                e.password == Password
              ) {
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
            <div>{e.name}</div>
            <div>{e.project}</div>
          </>
        );
      })}
    </>
  );
};

export default studentsIGroup;
