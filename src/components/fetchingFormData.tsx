"use client";
import CordinatorAccess from "@/Supabase/CordinatorAccess";
import Link from "next/link";
import { useEffect, useState } from "react";

const FetchingFormData = () => {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CordinatorAccess();
      setApiData(data || []);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Projects</h1>

      {apiData.length === 0 ? (
        <p className="text-gray-500">No project data available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {apiData.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{student.name}</h2>

              <p className="font-medium text-lg  text-gray-600 mb-1">
                <span className="font-medium">Project:</span> {student.project_title}
              </p>

              <p className="  text-gray-600 font-medium text-lg">
                <span className="">Supervisor:</span> {student.supervisor_name}
              </p>
              <p className="font-medium text-lg    text-gray-600">
                <span className="font-medium">Team Members:</span> {student.team.length}
              </p>
              <Link href={`/cordinator/studentsIGroup/${student.project_id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  View Details   </button>
              </Link>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchingFormData;
