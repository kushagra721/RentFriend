import React, { createContext, useState, useEffect } from "react";


const ApiContext = createContext();

const Context = ({ children }) => {
  const [logindata, setlogindata] = useState({});
  const [coordinates, setcoordinates] = useState([]);
  return (
    <ApiContext.Provider
    value={{
        logindata, setlogindata,coordinates, setcoordinates
    }}
  >
  {children}
  </ApiContext.Provider>
  )
}

export { ApiContext, Context };
