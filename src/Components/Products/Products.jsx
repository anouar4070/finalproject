import React from "react";
import Style from "./Products.module.css";
import Counter from "../Counter/Counter";
import Product from './../Product/Product';
function Products() {
  let title = "learn how to create react apps ";
  let showList = true
  let products = [
    {
      id: 1,
      label: "Iphone 14 pro max",
      price: 4000,
    },
    {
      id: 2,
      label: "Samsung",
      price: 3000,
    },
    {
      id: 3,
      label: "Oppo",
      price: 2000,
    },
    {
        id: 4,
        label: "Redme",
        price: 1000,
      },
  ];

  return (
    <>
      <h1>{title}</h1>

{showList && (
    
      <div >
        {products.map((product) => (
         <Product key={product.id} price={product.price} label={product.label} />
        ))}
      </div>
)}
    
<Counter />

    </>
  );
}

export default Products;
