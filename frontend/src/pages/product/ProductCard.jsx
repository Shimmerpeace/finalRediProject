import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

export default function ProductCard({ product }) {
  const { dispatch, cart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const inCart = cart.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch({ type: "ADD", product });
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
  };
  

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>

      <p className="rating-row">
        <AiFillStar size={20} color="gold" />
        {product.rating.rate} ({product.rating.count})
      </p>

      <button onClick={handleAddToCart}>
        Add to 🛒
      </button>

      {inCart && (
        <button onClick={() => dispatch({ type: "REMOVE", id: product.id })}>
          Remove from 🛒
        </button>
      )}

      {/* Alert UI */}
      {showAlert && (
        <div className="alert">
          Product added to cart!
        </div>
      )}
    </div>
  );
}


/*
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

export default function ProductCard({ product }) {
  const { dispatch, cart } = useCart();
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>

     

      <p className="rating-row">
  <AiFillStar size={20} color="gold" />
  {product.rating.rate} ({product.rating.count})
</p>
      <button onClick={() => dispatch({ type: "ADD", product })}>
        Add to 🛒
      </button>
      {inCart && (
        <button onClick={() => dispatch({ type: "REMOVE", id: product.id })}>
          Remove from 🛒
        </button>
      )}
    </div>
  );
}

*/
/*


import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

export default function ProductCard({ product }) {
  const { dispatch, cart } = useCart();
  const inCart = cart.find((item) => item.id === product.id);

  // Handler for adding to cart with alert
  const handleAddToCart = () => {
    dispatch({ type: "ADD", product });
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
      <p>${product.price}</p>
      <p className="rating-row">
        <AiFillStar size={20} color="gold" />
        {product.rating.rate} ({product.rating.count})
      </p>
      <button onClick={handleAddToCart}>
        Add to 🛒
      </button>
      {inCart && (
        <button onClick={() => dispatch({ type: "REMOVE", id: product.id })}>
          Remove from 🛒
        </button>
      )}
    </div>
  );
}

*/
