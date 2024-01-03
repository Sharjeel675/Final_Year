"use client";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import { useEffect, useState } from "react";
const dataFetch = async () => {
  const data = await fetch("/api/project");
  const jsonDta = await data.json();
  return jsonDta;
};

const studentsIGroup = () => {
  const [SupervisorName, setSupervisorName] = useState("Sir Ameen Khowaja");
  const [Password, setPassword] = useState("");
  const [passhide, sethide] = useState(true);
  const [FilterName, setFilterName] = useState("");
  const [apiData, setApiData] = useState<any[]>([]);
  const [apiDeleteData, setApiDeleteData] = useState("");
  const deletData = async (e: any) => {
    const data = await fetch("/api/project", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ stdId: e }),
    });
    console.log(e);
  };
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
      <div className="flex flex-col text-center w-full ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl mt-5 ">
          Supervisor Section
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 lg:text-2xl">
          This Section is Use For Supervisor
        </p>
      </div>
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
            type="password"
            placeholder="Enter Password"
            className="border-2 border-sky-600 w-full mt-2 px-1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          className=" bg-blue-400 text-1xl  inline-flex py-2 px-6 rounded-lg items-center ml-4
  hover:bg-gray-300 focus:outline-none"
          onClick={(e) => {
            profile.map((e: any) => {
              if (e.name == SupervisorName && e.password == Password) {
                setFilterName(SupervisorName);
              }
            });
          }}
        >
          {" "}
          Click
        </button>
      </div>
      <div className="mt-12">
        {studentsData.map((e, index) => {
          return (
            <>
              <div
                className="active:bg-black"
                onClick={(ev) => deletData(e.studentid)}
              >
                <div key={index}>Supervisor: {e.supervisorname}</div>
                <div>Name: {e.name}</div>
                <div>Project: {e.project}</div>
                <div>Mail Adress: {e.email}</div>
                <div>Gender: {e.gender}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default studentsIGroup;
