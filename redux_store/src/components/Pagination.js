import React from 'react'
import './Pagination.css'
function Pagination({itemsPerPage,currentPage,setCurrentPage,filterProducts}) {
    let numberOfPages = [];
   for(let i=1;i<=Math.ceil(filterProducts.length/itemsPerPage);i++){
    numberOfPages.push(i);
   }

   const pagefunction = (event)=>{
    let current = event.target.id;
    setCurrentPage(current)

   }

   let pages = numberOfPages.map((pageNumber)=>{
    return(
        <li id={pageNumber} className="listitem" onClick={pagefunction}>{pageNumber}</li>
    )
   })
  return (
    <section>
        <ul className="pagination flex">
            {pages}
        </ul>
    </section>
  );
}

export default Pagination
