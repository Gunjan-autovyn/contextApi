import React, { useState } from "react";
import { createContext } from "react";

const context = createContext();

export default function Context({ children }) {
  var storage = localStorage.getItems("cartItems");

  storage = JSON.parse(storage);

  let [cartItems, setCartItems] = useState(storage ? storage : []);

  const data = { cartItems, setCartItems };

  return <context.Provider value={data}>{children}</context.Provider>;
}
export { context };
