import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import { TiShoppingCart } from "react-icons/ti";

export default function Header({ onSearch }) {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="flex justify-between items-center gap-8 px-8 py-4 bg-[#5c5244] text-white font-medium cursor-pointer">
        <h1>RunTown Store</h1>
        <nav className="nav-container">
          <Link to="/" className="link">
            Shop
          </Link>
          <Link to="/cart" className="link" id="cart-logo">
            <TiShoppingCart size={30} />(
            {cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
          <span></span>
        </nav>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
}

/*
import SearchBar from "./SearchBar"


function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center mb-[30px]">
      
      <img src={logo} alt="store logo" className="store-logo"/>
      <nav>
        <a href="/" className="text-white mr-4 hover:underline">
          Home
        </a>
        <a href="/Main" className="text-white mr-4 hover:underline">
          Shop
        </a>
        <a href="/Cart" className="text-white hover:underline">
          Cart
        </a>
        
      </nav>
<SearchBar />
    </header>
  );
}

export default Header;












/**
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center mb-[30px]">
      <h1>RunTown Store</h1>
      <nav>
        <a href="/" className="text-white mr-4 hover:underline">
          Home
        </a>
        <a href="/products" className="text-white hover:underline">
          Products
        </a>
      </nav>
    </header>
  );
 */
