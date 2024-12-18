import React from 'react'
import { ShoesData } from '../data/Shoes'
import { Link } from 'react-router-dom'
const Shoes = () => {

  const FirstfiveImages=ShoesData.slice(0,5);

  return (
    <>
    <h1>Shoes</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
                <div className='img-box'>
                    <Link to='/shoes'>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Shoes
