import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [template, setTemplate] = useState("Template 1");

  return (
    <AppContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
        fontFamily,
        setFontFamily,
        template,
        setTemplate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
