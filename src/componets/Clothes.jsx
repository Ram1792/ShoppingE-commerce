import React from 'react'
import { ClothesData } from '../data/Clothes'
import { Link } from 'react-router-dom'
const Clothes = () => {

  const FirstfiveImages=ClothesData.slice(0,5);

  return (
    <>
    <h1>Clothes</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
                <div className='img-box'>
                    <Link to='/book/:id'>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Clothes