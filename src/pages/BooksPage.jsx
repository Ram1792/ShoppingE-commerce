import React from 'react'
import { BooksData } from '../data/Books'
import Navbar from '../componets/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const BooksPage = () => {

  const [ selectproduct,setproduct]=useState([]);
  const companyhandler=(gadget)=>{
        if(selectproduct.includes(gadget)){
          setproduct(selectproduct.filter((mango)=>mango!==gadget))
        }else{
          setproduct([...selectproduct,gadget])
        }
  }
  
  const filteredproduct=selectproduct.length===0? BooksData :  BooksData.filter((org)=>selectproduct.includes(org.category)) 
  return (
    <>
    <Navbar/>
    <div className="fullpage">
     <div className="pro-select">
      {BooksData.map((book)=>{
        return(
          <div className="ind-checkbox">
          <label htmlFor="">
             <input type="checkbox" checked={selectproduct.includes(book.category)} onChange={()=>companyhandler(book.category)} />
          </label>
          {book.category}
       </div>
        )
      })}
    </div>

    <div className='pagesection'>
      { filteredproduct.map((item)=>{
          return(
            <Link to={`/book/${item.id}`}>
            <div className='pageimgbox'>
               <img src={item.image} alt="" />
            </div></Link>
            ) })}
    </div>
     </div>
    </>
  )
}

export default BooksPage
