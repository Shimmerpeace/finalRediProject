import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Main from "./main";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </CartProvider>
  );
}

/*
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/storeContext";
import Header from "./components/Header";
import { HomePage } from "./components/HomePage";
import Main from "./components/Main";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="max-w-[1200px] mx-auto p-5 bg-gray-300 md:p-8">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
    //<Route path="/product/:id" element={<ProductDetails />} />
    //<Cart removeFromCart={removeFromCart} cart={cart} />
  );
}
export default App;
*/
