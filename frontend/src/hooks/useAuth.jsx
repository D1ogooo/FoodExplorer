import { createContext } from "react";

const Context = createContext()

export function useauth ({ children }) {
  const user = false
  
  return (
   <Context.Provider value={{user}>
    {children}
   </Context.Provider>
  )
}

