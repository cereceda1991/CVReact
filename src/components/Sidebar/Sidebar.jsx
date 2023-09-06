import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ColorPalette from "../ColorPalette/ColorPalette";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const {
    backgroundColor,
    updateBackgroundColor,
  } = useContext(AppContext);

  const handleBackgroundColorChange = (color) => {
    updateBackgroundColor(color);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div>
        <ColorPalette
          backgroundColor={backgroundColor}
          onColorChange={handleBackgroundColorChange}
        />
      </div>
    </div>
  );
};

export default Sidebar;
