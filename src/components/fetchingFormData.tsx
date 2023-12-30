"use client";
import { useEffect, useState } from "react";

const dataFetch = async () => {
  const data = await fetch("api/project");
  const jsonDta = await data.json();
  return jsonDta;
};
const FetchingFormData = ( ) => {
  const [apiData, setApiData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataFetch();
      console.log(data);
      setApiData(data.result.rows);
    };
    fetchData();
  }, []);
  console.log(apiData);
  return ( 
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
  );
};

export default FetchingFormData;
