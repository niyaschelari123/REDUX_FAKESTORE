import React from 'react'
import axios from "axios"
import { useEffect, useCallback, useMemo ,useState} from "react";
import ProductComponents from './ProductComponents';
import CategoryHeader from './CategoryHeader';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import productSlice, { productActions } from '../redux/ProductSlice';

function ProductListing() {

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.products);

  const [flag,setFlag] = useState(false);
  

    //pagination

  const [currentPage,setCurrentPage] = useState(1)
  const [itemsPerPage,setItemsPerPage] = useState(3);

    let filtered;

    
    const [selected,setSelected] = useState("All")
    const [search,setSearch] = useState("")

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
          
          
          dispatch(productActions.addItem(response.data))
        
        
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
      if (search==="") {

        filtered = products.filter((item)=>{
          if(selected=="All"){
            return item
          }else{
            return item.category==selected
          }
        })
      }else{
        filtered = products.filter((item)=>{
          if (item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) ) {
            
            return item;
          }
      
        })
      }
      
    
      console.log("Products :", products);
  return (
    <div>
        <div style={{marginTop:"50px",marginBottom: "40px"}} ><CategoryHeader selected={selected} setSelected={setSelected}  search={search} setSearch={setSearch} setCurrentPage={setCurrentPage} /></div>
      {products?<ProductComponents products={products} selected={selected} search={search} filteredProducts={filtered} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPge={setCurrentPage} />:<div>Loading</div>}
      {flag?<p>No such Products</p>:""}
      <div className="pagnation"><Pagination itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} filterProducts={filtered} /></div>
    </div>
  )
}

export default ProductListing
