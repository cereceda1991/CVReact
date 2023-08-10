import React, { useState } from 'react';
import { Text } from 'react-konva';

const CustomText = ({ text, x, y, fontSize, fontStyle }) => {
  const [position, setPosition] = useState({ x, y });
  const [currentFontSize, setCurrentFontSize] = useState(fontSize);

  const handleDragEnd = (e) => {
    setPosition({ x: e.target.x(), y: e.target.y() });
  };

  const handleFontSizeChange = (e) => {
    setCurrentFontSize(parseInt(e.target.value));
  };

  return (
    <React.Fragment>
      <Text
        text={text}
        x={position.x}
        y={position.y}
        fontSize={currentFontSize}
        fontStyle={fontStyle}
        draggable
        onDragEnd={handleDragEnd}
      />
      <input
        type="range"
        min="10"
        max="50"
        value={currentFontSize}
        onChange={handleFontSizeChange}
      />
    </React.Fragment>
  );
};

export default CustomText;
