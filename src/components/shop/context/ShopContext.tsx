"use client";
import React, { createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";

interface CartContextValue {
  cartItems: CartItem[];  
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  emptyCart:() => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  isOpen:boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLogged:boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  address:string;
  setAddress:React.Dispatch<React.SetStateAction<string>>;  
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],  
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
  isOpen: false,
    setIsOpen: () => {},
    isLogged: false,
    setIsLogged: () => {},
    address:"",
    setAddress: () => {}

});

export const useCart = () => {
  return useContext(CartContext);
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [address, setAddress] = useState('');

  const addToCart = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    )

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + product.quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);

    } else {
      setCartItems([...cartItems, { product, quantity: product.quantity }]);

    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const emptyCart = () => {
    const cartempty:any = [];

    setCartItems(cartempty);
  }
  const updateCartItemQuantity = (productId: number, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item?.product.price * item.quantity),
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,        
        addToCart,
        removeFromCart,
        emptyCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
        isOpen,
        setIsOpen,
        isLogged,
        setIsLogged,
        address,
        setAddress
      }}
    >
      {children}
    </CartContext.Provider>
  );
};