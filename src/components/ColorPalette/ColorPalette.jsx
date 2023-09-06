import React, { useContext } from "react";
import { SketchPicker } from "react-color";
import { ColorContext } from "../../context/ColorContext";

const ColorPalette = () => {
  const { handleColorChange } = useContext(ColorContext);

  return (
    <main>
      <SketchPicker onChange={(color) => handleColorChange(color.hex)} />
    </main>
  );
};

export default ColorPalette;
