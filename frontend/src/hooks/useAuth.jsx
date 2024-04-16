import { createContext } from "react";

const Context = createContext()

export function useAuth ({ children }) {
  const user = false
  
  return (
   <Context.Provider value={{user}}>
    {children}
   </Context.Provider>
  )
}

