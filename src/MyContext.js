import { createContext, useState } from "react";

const MyContext = createContext();

export function MyProvider({ children }) {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (name, price, image, qntd) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name.includes(name)) {
        cartItems[i].qntd += 1;
        cartItems[i].price = price * cartItems[i].qntd;
        setCartItems((prevState) => [...prevState]);
        return;
      }
    }
    setCartItems((prevState) => [...prevState, { name, price, image, qntd }]);
  };

  return (
    <MyContext.Provider value={{ user, setUser, addToCart, cartItems }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
