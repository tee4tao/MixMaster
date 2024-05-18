'use client'
import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  return (
    <AppContext.Provider
      value={{
        drinks, setDrinks
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};