import React from 'react'
import { BooksData  } from '../data/Books'
import { Link } from 'react-router-dom'
const Books = () => {

  const FirstfiveImages=BooksData .slice(0,5);

  return (
    <>
    <h1>Books</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
             
                <div className='img-box'>
                   <Link to={`/book/${item.id}`}>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Books
