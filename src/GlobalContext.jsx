import React, { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <globalContext.Provider value={{ user, setUser }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContext;
