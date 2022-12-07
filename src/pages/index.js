import Head from "next/head";
import Header from "../components/Header.js"
import Banner from "../components/Banner.js"
import ProductsFeed from "../components/ProductsFeed.js"
import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-gray-100">
      <head>
        <title>
          Amazon 2
        </title>
      </head>
      {/* header */}
      <Header />
      <main >
        {/* banner */}
        <Banner />
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}