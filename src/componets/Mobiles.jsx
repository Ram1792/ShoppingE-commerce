import React from 'react'
import { MobilesData} from '../data/Mobiles'
import { Link } from 'react-router-dom'
const Mobiles = () => {

  const FirstfiveImages=MobilesData.slice(0,5);

  return (
    <>
    <h1>Moblies</h1>
    <div className='prosection'>
         {FirstfiveImages.map((item)=>{
            return(
                <div className='img-box'>
                    <Link to='/mobiles'>
                    <img  className='actualimg' src={item.image} alt="" /></Link>
                </div>
            ) 
         })}
    </div>
    </>
  )
}

export default Mobiles
