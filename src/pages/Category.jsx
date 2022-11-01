import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { categoryBaseRoute, jeweleryRoute } from "../ApiRoutes";
import ProductsContainer from "../components/ProductsContainer";

const Category = (props) => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  async function getProducts() {
    const response = await axios.get(`${categoryBaseRoute}/${category}`);
    if (response.status === 200) {
      setProducts(response.data);
      // console.log(products.length);
    }
  }

  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <React.Fragment>
      <h2 className=" text-center my-4">
        Our {capitalizeFirstLowercaseRest(category)}
      </h2>
      {products.length !== 0 ? (
        <ProductsContainer
          data={products}
          cartProductsNum={props.cartProductsNum}
          setCartProductsNum={props.setCartProductsNum}
        ></ProductsContainer>
      ) : (
        <div class=" d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "calc(100vh - 55px)" }}>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Category;
