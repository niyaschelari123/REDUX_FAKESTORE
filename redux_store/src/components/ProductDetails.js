import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { individualActions } from '../redux/individualSlice';
import './ProductDetails.css'

function ProductDetails() {
    const dispatch=useDispatch();
    const product = useSelector((state)=>state.individual.product);
    
    const {productId}=useParams();
    
    const { image, title, price, category, description } = product;
  
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    
    dispatch(individualActions.selectItem(response.data))
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(individualActions.removeItem())
    };
  }, [productId]);
  return (
    <>
    {Object.keys(product).length === 0 ? (
        <div className="loading" >...Loading</div>
      ) : (
    <div className="prodcard">
      <div className="first-container">
        <img src={image}/>
      </div>
      <div className="second-container">
        <h1 className="product-title" >{title}</h1>
        <span>${price}</span>
        <h4>{category}</h4>
        <p>{description}</p>
        <button>Add To Cart</button>
      </div>
    </div>
      )}
    </>
  )
}

export default ProductDetails
