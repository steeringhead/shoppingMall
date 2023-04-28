import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export function CartProvider(props) {
    const [cartData, setCartData] = useState(localStorage.length);

    const cartDataChange = (data) => {
        setCartData(data);
    };

    return (
        <cartContext.Provider value={{ cartData, cartDataChange }}>
            {props.children}
        </cartContext.Provider>
    );
}
