import React from 'react'
import './CategoryHeader.css'
export default function CategoryHeader({selected,setSelected,setCurrentPage,search,setSearch}) {

    const category = ["All","men's clothing","jewelery","electronics","women's clothing"] ;

    const filtered = category.map((item)=>{
        return(
          <div className="itms">
          <h5 id={item} onClick={()=>{
            setSelected(item);
            setCurrentPage(1)
            }} >{item}</h5>
          </div>
        )
      })
  return (
    <div className="ind-items" style={{display:"flex",gap:"40px",justifyContent:"center"}} >
      {filtered}
      <div className="searchbar">
      <input type="text" placeholder="Search for Products" className="searchbox" autocomplete="off" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <img src="https://cdn-icons-png.flaticon.com/512/200/200941.png"/>
      </div>

    </div>
  )
}
