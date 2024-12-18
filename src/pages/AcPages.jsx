import React, { useState } from 'react'
import { AcData } from '../data/Ac'
import Navbar from '../componets/Navbar'
import { Link } from 'react-router-dom'
const AcPages = () => {

  const [ selectproduct,setproduct]=useState([]);
  const companyhandler=(gadget)=>{
        if(selectproduct.includes(gadget)){
          setproduct(selectproduct.filter((mango)=>mango!==gadget))
        }else{
          setproduct([...selectproduct,gadget])
        }
  }
  
  const filteredproduct=selectproduct.length===0? AcData :  AcData.filter((org)=>selectproduct.includes(org.company)) 
  

  return (
    <>
    <Navbar/>
     <div className="fullpage">
     <div className="pro-select">
      {AcData.map((ac)=>{
        return(
          <div className="ind-checkbox">
          <label htmlFor="">
             <input type="checkbox" checked={selectproduct.includes(ac.company)} onChange={()=>companyhandler(ac.company)} />
          </label>
          {ac.company}
       </div>
        )
      })}
    </div>

    <div className='pagesection'>
      { filteredproduct.map((item)=>{
          return(
            <Link to={`/ac/${item.id}`}>
            <div className='pageimgbox'>
               <img src={item.image} alt="" />
               <div className='product-details'>
               {item.company} 
               {item.price}
            </div>
            </div>      
            </Link>
            ) })}
    </div>
     </div>
    </>
  )
}

export default AcPages
