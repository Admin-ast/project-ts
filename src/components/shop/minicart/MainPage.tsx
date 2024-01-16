import React, { useState } from "react";
import CartDrawer from "./CartDrawer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/ShopContext";

const MainPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

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
        <p>{cartItems.length}</p>
      </button>

      <CartDrawer isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
  );
};

export default MainPage;
