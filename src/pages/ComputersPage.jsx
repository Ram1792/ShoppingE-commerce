import React from 'react'
import { computerData } from '../data/Computers'
import Navbar from '../componets/Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ComputersPage = () => {
  const [ selectproduct,setproduct]=useState([]);
  const companyhandler=(gadget)=>{
        if(selectproduct.includes(gadget)){
          setproduct(selectproduct.filter((mango)=>mango!==gadget))
        }else{
          setproduct([...selectproduct,gadget])
        }
  }
  
  const filteredproduct=selectproduct.length===0? computerData :  computerData.filter((org)=>selectproduct.includes(org.company)) 

  return (
    <>
    <Navbar/>
    <div className="fullpage">
     <div className="pro-select">
      {computerData.map((comp)=>{
        return(
          <div className="ind-checkbox">
          <label htmlFor="">
             <input type="checkbox" checked={selectproduct.includes(comp.company)} onChange={()=>companyhandler(comp.company)} />
          </label>
          {comp.company}
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

export default ComputersPage
