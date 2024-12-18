import React from 'react'
import { computerData } from '../data/Computers'
import { Link } from 'react-router-dom'
const Computers = () => {

  const FirstfiveImages=computerData.slice(0,5);

  return (
    <>
    <h1>Computers</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
                <div className='img-box'>
                     <Link to='/computers'>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Computers
