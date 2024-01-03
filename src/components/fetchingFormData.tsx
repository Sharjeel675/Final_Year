"use client";
import { useEffect, useState } from "react";
import CordinatorNavbar from "./cordinatoNavbar/Navbar";

const dataFetch = async () => {
  const data = await fetch("/api/project");
  const jsonDta = await data.json();
  return jsonDta;
};
const FetchingFormData = () => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      console.log(data);
      setApiData(data.result.rows);
    };
    fetchData();
  }, []);
  return (
    <>
      <CordinatorNavbar />
      <div className="flex flex-col text-center w-full ">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl mt-5 ">
          Cordinator Section
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 lg:text-2xl">
          This Section is Use For Cordinator
        </p>
      </div>
      {hide ? (
        <div>
          <input
            className="flex flex-col text-center w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="password"
            placeholder="Cordinator Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            className=" flex flex-col text-center  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-20 ml-10 sm:mt-5"
            onClick={() => {
              if (password == "hamza") {
                setHide(false);
              }
            }}
          >
            Button
          </button>
        </div>
      ) : (
        <table className="table-auto w-full text-left overflow-scroll h-44  ">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl w-44">
                Student ID
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Student Name
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Father Name
              </th>
              {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Supervisor Name
          </th> */}
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Project Title
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Gender
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Student Email
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Department
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                SupervisorName
              </th>
              <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
            </tr>
          </thead>
          <tbody>
            {apiData.map((e: any) => {
              return (
                <tr>
                  <td className="px-4 py-3">{e.studentid}</td>
                  <td className="px-4 py-3">{e.name}</td>
                  <td className="px-4 py-3">{e.fathername}</td>
                  <td className="px-4 py-3">{e.project}</td>
                  <td className="px-4 py-3">{e.gender}</td>
                  <td className="px-4 py-3">{e.email}</td>
                  <td className="px-4 py-3">{e.department}</td>
                  <td className="px-4 py-3">{e.supervisorname}</td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      )}{" "}
    </>
  );
};

export default FetchingFormData;
