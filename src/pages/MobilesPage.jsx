import React from 'react'
import { MobilesData } from '../data/Mobiles'
import Navbar from '../componets/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const MobilesPage = () => {
  const [ selectproduct,setproduct]=useState([]);
  const companyhandler=(gadget)=>{
        if(selectproduct.includes(gadget)){
          setproduct(selectproduct.filter((mango)=>mango!==gadget))
        }else{
          setproduct([...selectproduct,gadget])
        }
  }
  
  const filteredproduct=selectproduct.length===0? MobilesData :  MobilesData.filter((org)=>selectproduct.includes(org.title)) 

  return (
    <>
    <Navbar/>
    <div className="fullpage">
     <div className="pro-select">
      {MobilesData.map((mobile)=>{
        return(
          <div className="ind-checkbox">
          <label htmlFor="">
             <input type="checkbox" checked={selectproduct.includes(mobile.title)} onChange={()=>companyhandler(mobile.title)} />
          </label>
          {mobile.title}
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
            </div></Link>
            ) })}
    </div>
     </div>
    </>
  )
}

export default MobilesPage
