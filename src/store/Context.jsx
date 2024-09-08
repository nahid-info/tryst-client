import { createContext, useState } from "react";


export const Context = createContext()

export default function ContextProvider({ children }) {


  const [userData, setUserData] = useState()

  const url = 'https://tryst-server.onrender.com'

  return (
    <Context.Provider value={{ userData, setUserData, url }} >
      {children}
    </Context.Provider>
  )
}

