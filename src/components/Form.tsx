"use client";

import React, { useState } from 'react';

const teachers = ['Ameen', 'Teacher 2', 'Teacher 3'];
const projects = ['Project A', 'Project B', 'Project C'];
const departments = ['Department 1', 'Department 2', 'Department 3'];

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
    phoneNumber: '',
    selectedTeacher: teachers[0],
    comment: '',
    selectedProject: projects[0],
    selectedDepartment: departments[0],
    selectedGender: 'Female',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className=" lg:w-2/3 w-full mt-10 p-4 bg-white shadow-md rounded-md ">
      <h1 className="text-2xl font-bold mb-4">Teachers Selection Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Add the teacher selection dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Supervisor Name</label>
          <select
            name="selectedTeacher"
            value={formData.selectedTeacher}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            {teachers.map((teacher, index) => (
              <option key={index} value={teacher}>
                {teacher}
              </option>
            ))}
          </select>
        </div>

        {/* Add the project selection dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Project Name:</label>
          <select
            name="selectedProject"
            value={formData.selectedProject}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            {projects.map((project, index) => (
              <option key={index} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>

        {/* Add the student department radio buttons */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Student Dept:</label>
          {departments.map((department, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                name="selectedDepartment"
                value={department}
                checked={formData.selectedDepartment === department}
                onChange={handleChange}
                className="mr-2"
              />
              <span>{department}</span>
            </div>
          ))}
        </div>

        {/* Add the student gender radio buttons */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Student Gender:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="selectedGender"
              value="Female"
              checked={formData.selectedGender === 'Female'}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Female</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="selectedGender"
              value="Male"
              checked={formData.selectedGender === 'Male'}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Male</span>
          </div>
        </div>

        {/* Add the start date and end date date pickers */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

