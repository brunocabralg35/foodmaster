import { createContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price, image) => {
    setCartItems((prevState) => [...prevState, { name, price, image }]);
  };

  return (
    <MyContext.Provider value={{ user, setUser, addToCart, cartItems}}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
