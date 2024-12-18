import React from 'react'
import { WatchesData } from '../data/Watches'
import Navbar from '../componets/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const WatchesPage = () => {
  
  const [ selectproduct,setproduct]=useState([]);
  const companyhandler=(gadget)=>{
        if(selectproduct.includes(gadget)){
          setproduct(selectproduct.filter((mango)=>mango!==gadget))
        }else{
          setproduct([...selectproduct,gadget])
        }
  }
  
  const filteredproduct=selectproduct.length===0? WatchesData :  WatchesData.filter((org)=>selectproduct.includes(org.category)) 
  return (
    <>
    <Navbar/>
    <div className="fullpage">
     <div className="pro-select">
      {WatchesData.map((watch)=>{
        return(
          <div className="ind-checkbox">
          <label htmlFor="">
             <input type="checkbox" checked={selectproduct.includes(watch.category)} onChange={()=>companyhandler(watch.category)} />
          </label>
          {watch.category}
       </div>
        )
      })}
    </div>

    <div className='pagesection'>
      { filteredproduct.map((item)=>{
          return(
            <Link to={`/book/${item.id}`}>
            <div className='pageimgbox'>
               <img src={item.image} alt="" />
            </div></Link>
            ) })}
    </div>
     </div>
     </>
  )
}

export default WatchesPage
