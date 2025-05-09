import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useCart } from "../contextProvider/CartContext"; 
import Spinner from "../components/Spinner";

export default function ProductDetail() {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProd(json);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (!prod) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <h2>
        <b>{prod.title}</b>
      </h2>
      <p className="description">{prod.description}</p>
      <img src={prod.image} alt={prod.title} />
      <p>
        <b>${prod.price}</b>
      </p>

      <p className="rating-row">
        <AiFillStar size={20} color="gold" /> {prod.rating.rate} (
        {prod.rating.count})
      </p>

      <button onClick={() => dispatch({ type: "ADD", product: prod })}>
        Add to Cart
      </button>
    </div>
  );
}
//<p>{prod.category}</p>
