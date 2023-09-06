import { createContext, useState } from 'react';
import { ColorProviderPropTypes } from '../utils/prop-types';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

ColorProvider.propTypes = ColorProviderPropTypes;
