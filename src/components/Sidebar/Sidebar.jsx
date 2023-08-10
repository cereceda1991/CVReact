import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ColorPalette from "../ColorPalette/ColorPalette";
import FontSelector from "../FontSelector/FontSelector";
import TemplateSelector from "../TemplateSelector/TemplateSelector";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const {
    backgroundColor,
    fontFamily,
    template,
    updateBackgroundColor,
    updateFontFamily,
    updateTemplate,
  } = useContext(AppContext);

  const handleBackgroundColorChange = (color) => {
    updateBackgroundColor(color);
  };

  const handleFontFamilyChange = (font) => {
    updateFontFamily(font);
  };

  const handleTemplateChange = (selectedTemplate) => {
    updateTemplate(selectedTemplate);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {isOpen ? (
          <i className="bx bx-chevron-left"></i>
        ) : (
          <i className="bx bx-chevron-right"></i>
        )}
      </button>
      <h2>Options</h2>
      <div>
        <h3>Background Color</h3>
        <ColorPalette
          backgroundColor={backgroundColor}
          onColorChange={handleBackgroundColorChange}
        />
      </div>
      <div>
        <h3>Font Family</h3>
        <FontSelector
          fontFamily={fontFamily}
          onFontChange={handleFontFamilyChange}
        />
      </div>
      <div>
        <h3>Template</h3>
        <TemplateSelector
          template={template}
          onTemplateChange={handleTemplateChange}
        />
      </div>
    </div>
  );
};

export default Sidebar;
