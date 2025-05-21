"use client";
import { useState } from "react";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import SupervisorStudentProjects from "@/Supabase/SupervisorStudentProjects";

const StudentsGroup = () => {
  const [supervisorName, setSupervisorName] = useState("Dr. Asif Ai Wagan");
  const [password, setPassword] = useState("");
  const [apiData, setApiData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(apiData);

  const profiles = [
    { name: "Dr. Asif Ai Wagan", password: "asif ali 123" },
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
    const data = await SupervisorStudentProjects(supervisorName);
    setApiData(data || []);
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
              <option value="">Select Supervisor</option>
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

        {isAuthenticated && apiData.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Student Projects</h2>
            {apiData.map((student, index) => (
              <div
                key={index}
                className="border rounded p-4 mb-4 shadow-md bg-white"
              >
                <p> <span className="text-blue-500">Project Name:</span> <span className="text-lg">{student.project_title}</span> </p>
                <p> <span className="text-blue-500">Submission Date:</span> <span className="text-lg">{new Date(student.created_at).toLocaleDateString()}</span> </p>
                <p> <span className="text-blue-500">Team Members:</span> <span className="text-lg">{student.team.length}</span> </p>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StudentsGroup;
