import React from 'react'
import { BooksData } from '../data/Books'
import { useParams } from 'react-router-dom'
import Navbar from '../componets/Navbar';

const SinglePages = () => {
  const {id}=useParams();
   const product=BooksData.find((item)=>item.id===id);

console.log(id);

  return (

   <>
   <Navbar/>
    <div className="ind-page">
      <div className="ind-img">
        <img src={product.image} alt="" />
      </div>
      <div className="ind-details">
         <div className="ind-price">
           <h1>{product.price}</h1>
         </div>
         <div className="ind-com">
          <h1>{product.author}</h1>
         </div>
         <div className="ind-desc">
            <p>{product.description}</p>
         </div>
      </div>
    </div>
   </>
  )
}

export default SinglePages
