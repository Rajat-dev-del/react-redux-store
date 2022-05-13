import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import ProductComponent from "../product/ProductComponent";
import axios from "axios";
import {setProducts} from "./../../redux/actions/productActions"

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch()
  
  useEffect(()=>{
      getProducts()
  },[])
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log('error is',error);
      });
      dispatch(setProducts(response.data))
    };
  console.log("product is",products)

  
  return (
      <div className="text-center">
        <h1>ProductListing</h1>
        {
            Object.keys(products).length === 0 ? (
                <Loader/>
            ) : (
                <div className="mt-5 text-center">
                  
                  <div className="d-flex flex-wrap">
                    <ProductComponent/>
                  </div>
                </div>
            )
        }
      </div>
  );
};
export default ProductListing;
