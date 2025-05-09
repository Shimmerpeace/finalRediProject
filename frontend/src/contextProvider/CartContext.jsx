import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const exist = state.find(item => item.id === action.product.id);
      if (exist) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    case "REMOVE":
      return state.filter(item => item.id !== action.id);
    case "UPDATE":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}



/*
import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]); // Indicates an array with two elements: products = Current state value, and setProducts = Function to update the state
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cart, setCart] = useState(getDefaultCart());
 

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cart[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };
  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateCartItemCount = (newAmount, itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cart,
    setSearchTerm,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    filteredProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};



/*


import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  // Indicates an array with two elements: products =
  // Current state value, and setProducts = Function to update the state
 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cart, setCart] = useState(getDefaultCart());
 

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cart[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateCartItemCount = (newAmount, itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cart,
    setSearchTerm,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    filteredProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};


*/