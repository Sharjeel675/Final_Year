import React from "react";
import SuperviserNavbar from "@/components/supervisorUi/SuperviserNavbar";
import Hero from "@/components/Hero";
// import CordinatorNavbar from "@/components/cordinatoNavbar/navbar";
import CordinatorNavbar from "@/components/cordinatoNavbar/Navbar";

const supervisor = () => {
  return (
    <>
      <CordinatorNavbar /> <Hero />
    </>
  );
};

export default supervisor;
