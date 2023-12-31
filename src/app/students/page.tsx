import React from "react";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import Hero from "@/components/Hero";
import StudentsNavbar from "@/components/studentNavbar/navbar";

const supervisor = () => {
  return (
    <>
      <StudentsNavbar /> <Hero />
    </>
  );
};

export default supervisor;
