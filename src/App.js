import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIShown] = useState(false);

  const showCartHandler = () => {
    setCartIShown(true);
  }

  const hideCartHandler = () => {
    setCartIShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
