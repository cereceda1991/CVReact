import React, { useState } from "react";
import "./SidebarToggleButton.css";
import Sidebar from "../Sidebar/Sidebar";

const SidebarToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle_button" onClick={toggleSidebar}>
        <i className="bx bx-menu"></i>
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default SidebarToggleButton;
