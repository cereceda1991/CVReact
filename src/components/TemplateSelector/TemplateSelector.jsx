import React, { useState } from "react";

const TemplateSelector = ({ onTemplateChange }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(""); // Estado para almacenar la plantilla seleccionada

  const templates = ["Template 1", "Template 2", "Template 3", "Template 4"]; // Lista de plantillas disponibles

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    onTemplateChange(template);
  };

  return (
    <div>
      {templates.map((template) => (
        <button
          key={template}
          className={`template-option ${
            selectedTemplate === template ? "selected" : ""
          }`}
          onClick={() => handleTemplateClick(template)}
        >
          {template}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
