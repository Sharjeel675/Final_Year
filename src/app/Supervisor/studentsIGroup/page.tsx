"use client";
import { useEffect, useState } from "react";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import SupervisorStudentProjects, { ProjectApprovalBySupervisor } from "@/Supabase/SupervisorStudentProjects";
import { stat } from "fs";

const StudentsGroup = () => {
  const [supervisorName, setSupervisorName] = useState("Dr. Asif Ai Wagan");
  const [password, setPassword] = useState("");
  const [apiData, setApiData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [btnLoading, seBtntLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const filteredProjects = apiData.filter(project => project.status === status);

  

  const profiles = [
    { name: "Dr. Asif Ai Wagan", password: "asifali123" },
    { name: "Dr. Asif Ali Laghari", password: "langhari321" },
    { name: "Mr Ameen Khowaja", password: "ameenK3321" },
    { name: "Dr. Sarmad", password: "sarmad123" },
    { name: "Dr. Haque Nawaz Lashari", password: "nawaz123" },
    { name: "Dr. Rind", password: "rind123" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const match = profiles.find(
      (profile) =>
        profile.name === supervisorName && profile.password === password
    );

    if (!match) {
      setError("Incorrect supervisor name or password.");
      setIsAuthenticated(false);
      setApiData([]);
      return;
    }

    setError("");
    setIsAuthenticated(true);
    const data: any = await SupervisorStudentProjects(supervisorName, setLoading);
    setApiData(data || []);
    if (data?.length <= 0) {
      setError("No project  has submitted  with this supervisor  ");
    }
  };



  return (
    <>
      <SuperviserNavbar />
      <div className="w-3/4 mx-auto mt-12">
        <form onSubmit={handleSubmit} className="flex justify-between gap-4">
          <div className="w-1/2">
            <select
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
              className="bg-gray-200 block w-full p-2"
              required
            >
              {profiles.map((profile, index) => (
                <option key={index} value={profile.name}>
                  {profile.name}
                </option>
              ))}
            </select>

            <input
              type="password"
              placeholder="Enter password"
              className="border-2 border-sky-600 w-full mt-2 p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 h-12 mt-6 rounded"
          >
            Submit
          </button>
        </form>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {loading ? <p>Loading......</p> : isAuthenticated && apiData.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold mb-4">Student Projects</h2>
              <div className="flex justify-center gap-3">
                <button onClick={() => setStatus('pending')} className="bg-black text-white px-3 py-2 rounded-md">Pending</button>
                <button onClick={() => setStatus('accepted')} className="bg-green-600 text-white px-3 py-2 rounded-md">Accepted</button>
                <button onClick={() => setStatus('decline')} className="bg-red-600 text-white px-3 py-2 rounded-md">decline</button>
              </div>
            </div>


            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 mt-4">
                No {status} requests available
              </p>
            ) : (
              filteredProjects.map((student, index) => (
                <div
                  key={index}
                  className="border rounded p-4 mb-4 shadow-md bg-white"
                >
                  <p><span className="text-blue-500">Status:</span> <span className="text-lg">{student.status}</span></p>
                  <p><span className="text-blue-500">Project Name:</span> <span className="text-lg">{student.project_title}</span></p>
                  <p><span className="text-blue-500">Submission Date:</span> <span className="text-lg">{new Date(student.created_at).toLocaleDateString()}</span></p>
                  <p><span className="text-blue-500">Team Members:</span> <span className="text-lg">{student.team.length}</span></p>
                  <div className="flex gap-5 mt-2">
                    {student.status === 'pending' ? (
                      <>
                        <button
                          onClick={async () => {
                            const success = await ProjectApprovalBySupervisor(student.project_id, 'accepted', seBtntLoading);
                            if (success) {
                              setApiData((prev) =>
                                prev.map((proj) => {
                                  if (proj.project_id === student.project_id) {
                                    return { ...proj, status: 'accepted' };
                                  }
                                  return proj;
                                })
                              );
                            }
                          }}
                          className="bg-green-600 text-white px-3 py-2 rounded-md"
                        >
                          {btnLoading ? 'Loading...' : "Accept"}
                        </button>
                        <button
                          onClick={async () => {
                            const success = await ProjectApprovalBySupervisor(student.project_id, 'decline', seBtntLoading)
                            if (success) {
                              setApiData((prev) =>
                                prev.map((proj) => {
                                  if (proj.project_id === student.project_id) {
                                    return { ...proj, status: 'decline' };
                                  }
                                  return proj;
                                })
                              );
                            }

                          }}
                          className="bg-red-600 text-white px-3 py-2 rounded-md"
                        >
                          {btnLoading ? 'Loading...' : "Decline"}
                        </button>
                      </>
                    ) :  (
                      student.status === 'accepted' ?
                        <>
                          <button
                            onClick={async () => {
                              const success = await ProjectApprovalBySupervisor(student.project_id, 'decline', seBtntLoading)
                              if (success) {
                                setApiData((prev) =>
                                  prev.map((proj) => {
                                    if (proj.project_id === student.project_id) {
                                      return { ...proj, status: 'decline' };
                                    }
                                    return proj;
                                  })
                                );
                              }

                            }}
                            className="bg-red-600 text-white px-3 py-2 rounded-md"
                          >
                            {btnLoading ? 'Loading...' : "Decline"}
                          </button>
                        </>
                        : <button
                          onClick={async () => {
                            const success = await ProjectApprovalBySupervisor(student.project_id, 'accepted', seBtntLoading);
                            if (success) {
                              setApiData((prev) =>
                                prev.map((proj) => {
                                  if (proj.project_id === student.project_id) {
                                    return { ...proj, status: 'accepted' };
                                  }
                                  return proj;
                                })
                              );
                            }
                          }}
                          className="bg-green-600 text-white px-3 py-2 rounded-md"
                        >
                          {btnLoading ? 'Loading...' : "Accept"}
                        </button>
                    )}
                    {/*  */}
                  </div>
                </div>
              ))
            )}




          </div>
        )}
      </div>
    </>
  );
};

export default StudentsGroup;
