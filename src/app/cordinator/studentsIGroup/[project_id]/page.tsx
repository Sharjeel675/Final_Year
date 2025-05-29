"use client";
import { ProjectDetails } from "@/Supabase/CordinatorAccess";
import React, { useEffect } from "react";

const ProjectDetailsPage = ({ params }: { params: { project_id: string } }) => {
  const [data, setData] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchResponse = async () => {
      const data = await ProjectDetails(params.project_id);
      setData(data || []);
    };
    fetchResponse();
  }, [params.project_id]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📘 Project Details</h1>

      {data.length === 0 ? (
        <p className="text-gray-500">looading.</p>
      ) : (
        data.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🎓 {project.name}
            </h2>

            <div className="mb-4">
              <p className="text-gray-700 text-lg mb-1">
                <span className="font-medium">Project Title:</span>{" "}
                {project.project_title}
              </p>
              <p className="text-gray-700 text-lg">
                <span className="font-medium">Supervisor:</span>{" "}
                {project.supervisor_name}
              </p>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.team.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50"
                  >
                    <p className="font-semibold text-gray-800 mb-1">
                      🧑Team Lead: <span className="font-normal">{member.name}</span>
                    </p>

                    <p className="text-gray-700">Email: {member.mail}</p>
                    <p className="text-gray-700">Department: {member.department}</p>
                    <p className="text-gray-700">Member 1 : {member.member1}</p>
                    <p className="text-gray-700">Member 2 : {member.member2}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectDetailsPage;
