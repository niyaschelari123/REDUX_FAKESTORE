import React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './PComponents.css'

function ProductComponents({products,selected,filteredProducts,currentPage,itemsPerPage}) {

    let indexLast = currentPage*itemsPerPage;
  let indexFirst = indexLast - itemsPerPage;

    const filterFinal = filteredProducts.slice(indexFirst,indexLast);

    const renderList = filterFinal.map((product) => {
        const { id, title, image, price, category } = product;
        return (

          <Link style={{textDecoration:"none",color:"black"}} to={`/product/${id}`}>
          <div className="card">
            <div className="imgcontainer">
            <img src={image} />
            </div>
            <div className="titlecontainer">
            <h6 className="tit"  >{title}</h6>
            <h6 className="catg" style={{textAlign:"center"}} >Category : {category}</h6>
            <h4 style={{textAlign: "center"}} >$.{price}</h4>
            <button>Add to Cart</button>
            </div>
            
          </div>
          </Link>
          
        );
      });

  return (
    <div className="displayprod">
     {renderList}
     </div>
  )
}

export default ProductComponents
