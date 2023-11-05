import React from "react";
import styled from "styled-components";
import ProductBox from "./ReUse/ProductBox";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 0px;

`;
  // @media (max-width: 992px) {
  //   grid-template-columns: 1fr 1fr; /* 2 columns on tablets */
  // }

  // @media (max-width: 576px) {
  //   grid-template-columns: 1fr 1fr; /* 2 columns on mobile */
  // }

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
`;

const SkeletonProductBox = styled.div`
  width: 100%;
  height: 190px; /* Adjust the height according to your design */
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

function OurProduct() {
  // Assuming your data is an array of products
  const products = [
    { id: 1, price:12, image: "https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2", name: "Product 1" },
    { id: 2, price:12, image: "https://th.bing.com/th/id/OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK?pid=ImgDet&w=1366&h=768&rs=1", name: "Product 2" },
    { id: 2, price:12, image: "https://th.bing.com/th/id/OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK?pid=ImgDet&w=1366&h=768&rs=1", name: "Product 2" },
    { id: 3, price:12, image: "/logo192.png", name: "Product 3" },
    // Add more products as needed
  ];

  return (
    <div className="d-flex justify-content-center w-100 background-image" style={{ paddingTop: "140px", height:"100vh" }}>
    <div className="our-product-container">

    <ProductGrid>
        {/* {isLoading
          ? // Render the skeleton loading effect while loading
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonProductBox key={index} className="skeleton-loading" />
            ))
          : // Render actual product boxes once data is loaded
            products.length > 0 &&
            products.map((product) => <ProductBox {...product} />)
        } */}
        {products.map((product) => <ProductBox {...product} />)}
      </ProductGrid>
    </div>
    {/* <div className="
    
    ">
      {products.map((product) => (
        <div key={product.id} className="card">
     
            <img src={product.image} alt={product.name} />
            <div className="btn-container">
              <button className="btn">Button 1</button>
              <button className="btn">Button 2</button>
            </div>
          
        </div>
      ))}
    </div> */}
    </div>
  );
}

export default OurProduct;
