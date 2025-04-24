import React, { useState, useEffect } from "react";
import ProductList from "./pages/product/ProductList";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Spinner from "./Spinner";
import Header from "./components/Header";
import Footer from "./components/footer";

export default function Main() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json()
      ),
    ]).then(([prods, cats]) => {
      setProducts(prods);
      setCategories(cats);
      setLoading(false);
    });
  }, []);

  const handleSearch = (text, cat) => {
    setSearch(text || "");
    setCategory(cat || "");
    navigate("/");
  };

  let filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? p.category === category : true)
  );

  if (loading) return <Spinner />;

  return (
    <>
      <Header onSearch={handleSearch} categories={categories} />

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={filtered}
              onSearch={handleSearch}
              categories={categories}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
