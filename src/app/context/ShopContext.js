import { createContext, useContext, useEffect, useState } from "react";
import { getFetcher } from "@/service";
const AppContext = createContext();

export const AppProvider = ({ children }) => {  
        const [cartProducts, setCartProducts] = useState([]);
        const [cartQuantity, setCartQuantity] = useState(0);
        const [cartTotal, setCartTotal] = useState(0);
        const [isCartOpen, setIsCartOpen] = useState(false);
        const [isLogin, setIsLogin] = useState(false);
        const [user, setUser] = useState(null);
        

        useEffect(() => {
            const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (accessToken && refreshToken) {
      setIsLogin(true);
    }
            const getCart = async () => {
                const response = await getFetcher('/cart/');
              //  console.log(response);
                if(response?.success){
                    setCartProducts(response.cart);
                }
            }

            if(isLogin){
                getCart();
            }
        },[]);


}

export const useAppContext = () => useContext(AppContext);
