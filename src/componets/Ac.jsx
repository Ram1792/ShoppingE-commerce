import React from 'react'
import { AcData } from '../data/Ac'
import { Link } from 'react-router-dom'
const Ac = () => {

  const FirstfiveImages=AcData.slice(0,5);

  return (
    <>
      <div className='sep-heading'><h1>Ac</h1></div>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
            
                <div className='img-box'>
                    <img  className='actualimg' src={item.image} alt="" />
                </div>
            ) 
         })}
       
    </div>
    </>
  )
}

export default Ac
