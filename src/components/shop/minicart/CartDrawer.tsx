import PropTypes from 'prop-types';
import React, { useState } from "react";
import { useContext } from 'react';
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useCart } from '../context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Product } from '../types';
import Link from 'next/link';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const drawerClasses = isOpen ? "translate-x-0" : "translate-x-full";
  const [quantity, setQunatity] = useState(1);
 // const [cartItems, setCartItems] = useState([]);
  //console.log(useCart);
  const { updateCartItemQuantity, cartItems, removeFromCart, cartTotal } = useCart();
  // console.log(cartItems);
  
//  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  const handleInc = (product:number, quantity:number) => {
    quantity = quantity + 1;
    updateCartItemQuantity(product,quantity);
    setQunatity(quantity + 1);
    

  };
  const handleDec = (product:number, quantity:number) => {
    quantity = quantity - 1; 
    updateCartItemQuantity(product,quantity);
    setQunatity(quantity - 1);
    
  };

  const notifyRemovedFromCart = (item:any) => toast.error(`${item.product.title} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  });


  const notifyCartCleared = () => toast.error(`Cart cleared!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  });

  const handleRemoveFromCart = (product:any) => {
    removeFromCart(product);
    setQunatity(cartItems.length)
    toast.success("Successfully removed from cart");
   // notifyRemovedFromCart(product)
  }



  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full transform bg-white shadow-lg md:w-1/2 lg:w-1/4 
      ${drawerClasses}  transition-transform duration-300 ease-in-out `}
    >
      <div className="flex justify-between px-4 py-2">
        <h2 className="mt-2 text-lg font-semibold text-gray-600">
          Shopping cart
        </h2>
        <button className="text-gray-600" onClick={onClose}>
          <div className="mt-2 flex gap-1">
            <div className=" text-base">
              <AiOutlineClose />
            </div>
            <div className=""> Close </div>
          </div>
        </button>
      </div>

      {/* Add your cart items and other content here */}
      <div className="grid grid-rows-3 ">
      {cartItems.map((item:any) => (
        <div className="flex gap-2 p-5 hover:bg-slate-100" key={item?.product.id}>
          <div className="">
            <img
              src={item?.product?.image}
              alt=""
              height={50}
              width={50}
              className=""
            />
          </div>
          <div className="">
            <p className="text-base font-semibold text-black ">
              {item?.product?.title}
            </p>
            <div className="flex w-[55%] rounded-[15px] border-[1px]">
              <button
                disabled={item?.quantity === 1}
                onClick={() =>  handleDec(item?.product.id,item?.quantity)}
                className="  border-1 border-r px-3 py-2 text-black hover:bg-teal-900"
              >
                -
              </button>
              <p className="border-1 border-r px-3 py-2 text-black">
                {item?.quantity}
              </p>
              <button
                onClick={() => handleInc(item?.product.id,item?.quantity)}
                className="px-3 py-2 text-black hover:bg-teal-900"
              >
                +
              </button>
            </div>
            <p className="text-black">₹{item?.product?.price}</p>
          </div>
          <div className="">
            <div className="my-3 py-3">
            <p className='text-black'>₹ {item?.product.price * item?.quantity}</p>
            </div>
            </div>
            <div className='text-black my-3 py-3 cursor-pointer' onClick={() => handleRemoveFromCart(item?.product.id)}>
              <AiFillDelete></AiFillDelete>
              </div>
        </div>
      ))}
        {/* <div className=""></div> */}
        <div className="border-top border-[2px] p-5 text-black ">
          <div className="flex justify-between text-xl  ">
            <p className="">Subtotal:</p>
            <p className="">₹ { cartTotal }</p>
          </div>
          <Link href="/shop/checkout">
          <div className="text-bold mt-5 bg-teal-500 py-3 text-center text-white">
            CHECKOUT 
            
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
