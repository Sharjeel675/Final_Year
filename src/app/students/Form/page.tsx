"use client";
import Form from "@/components/Form";
import StudentsNavbar from "@/components/studentNavbar/navbar";
   import React, { useState } from "react";

const studentsForm = () => {
  return (
    <>
      <StudentsNavbar /> <Form />
    </>
  );
};

export default studentsForm;
