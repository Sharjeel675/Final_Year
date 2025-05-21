"use client";
import Form from "@/components/Form";
import CordinatorNavbar from "@/components/cordinatoNavbar/Navbar";
  import React, { useState } from "react";

const studentsForm = () => {
  return (
    <>
      <StudentsNavbar /> <Form />
    </>
  );
};

export default studentsForm;
