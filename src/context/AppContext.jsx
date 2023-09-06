import { createContext, useState } from 'react';
import { AppProviderPropTypes } from '../utils/prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  return (
    <AppContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = AppProviderPropTypes;
