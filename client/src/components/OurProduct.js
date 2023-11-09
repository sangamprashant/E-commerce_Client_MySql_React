import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch product data when the component mounts
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center w-100 background-image" style={{ paddingTop: "140px", height: "100vh" }}>
      <div className="our-product-container">
        <ProductGrid>
          {isLoading
            ? // Render the skeleton loading effect while loading
              Array.from({ length: 3 }).map((_, index) => (
                <SkeletonProductBox key={index} className="skeleton-loading" />
              ))
            : // Render actual product boxes once data is loaded
              products.length > 0 &&
              products.map((product) => <ProductBox key={product.id} {...product} />)
          }
        </ProductGrid>
      </div>
    </div>
  );
}

export default OurProduct;
