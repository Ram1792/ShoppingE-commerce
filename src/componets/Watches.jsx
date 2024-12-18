import React from 'react'
import { WatchesData } from '../data/Watches'
import { Link } from 'react-router-dom'
const Watches = () => {

  const FirstfiveImages=WatchesData.slice(0,5);

  return (
    <>
    <h1>Watches</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
                <div className='img-box'>
                    <Link to='/Watches'>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Watches
