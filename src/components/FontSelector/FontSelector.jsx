import React, { useState } from "react";

const FontSelector = ({ onFontChange }) => {
  const [selectedFont, setSelectedFont] = useState(""); // Estado para almacenar la fuente seleccionada

  const fonts = [
    "Arial",
    "Helvetica",
    "Verdana",
    "Times New Roman",
    "Courier New",
  ]; // Lista de fuentes disponibles

  const handleFontClick = (font) => {
    setSelectedFont(font);
    onFontChange(font);
  };

  return (
    <div>
      {fonts.map((font) => (
        <button
          key={font}
          className={`font-option ${selectedFont === font ? "selected" : ""}`}
          onClick={() => handleFontClick(font)}
        >
          {font}
        </button>
      ))}
    </div>
  );
};

export default FontSelector;
