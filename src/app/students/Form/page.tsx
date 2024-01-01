"use client";
import Form from "@/components/Form";
import CordinatorNavbar from "@/components/cordinatoNavbar/navbar";
import StudentsNavbar from "@/components/studentNavbar/navbar";
import Image from "next/image";
import React, { useState } from "react";

const studentsForm = () => {
  return (
    <>
      <CordinatorNavbar /> <Form />
    </>
  );
};

export default studentsForm;
