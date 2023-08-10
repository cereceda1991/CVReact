import React, { useContext } from "react";
import { SketchPicker } from "react-color";
import { ColorContext } from "../../context/ColorContext";

const ColorPalette = () => {
  const { handleColorChange } = useContext(ColorContext);

  return (
    <div>
      <h2>Color Palette</h2>
      <SketchPicker onChange={(color) => handleColorChange(color.hex)} />
    </div>
  );
};

export default ColorPalette;
