import React, { useReducer, createContext } from "react";
import { IncludeReducer } from "../reducers/Incluir";

export const CartContext = createContext();

function CartProvider({ children }) {
 const [quantity, dispatch] = useReducer(IncludeReducer, {
  count: 1,
 })
 
 return (
  <CartContext.Provider value={{ dispatch, quantity }}>
   {children}
  </CartContext.Provider>
 )
}

export { CartProvider }