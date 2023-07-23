import React, { createContext, useState, FC, ReactNode } from 'react';
import { CartContextValue, CartItem } from '../types';

const CartContext = createContext<CartContextValue>({} as CartContextValue);

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const contextValue: CartContextValue = {
        cartItems,
        addToCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
