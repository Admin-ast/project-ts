import React, { useState } from "react";
import CartDrawer from "./CartDrawer";
import { AiOutlineShoppingCart } from "react-icons/ai";

const MainPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      {/* Your main content */}

      <button onClick={handleCartClick} className="text-2xl ">
        <AiOutlineShoppingCart />
      </button>

      <CartDrawer isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
  );
};

export default MainPage;
