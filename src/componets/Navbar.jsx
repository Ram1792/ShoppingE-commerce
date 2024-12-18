import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="ind-full-nav">
    <div className="navbarSection">
        <div className="logo">
            <img src="https://files.oaiusercontent.com/file-2uvrwh34cVjE9aXXSZwh7H?se=2024-12-12T14%3A34%3A52Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5480fd9a-e54c-4e05-822a-18ce08a9528d.webp&sig=8ulruBJyDSKJ3w%2BP0PB68TCmq1/utResG88jgxnWJyk%3D" alt="" />
        </div>
        <div className="searchbar">
            <input type="text" id="" placeholder='Search something here..' />
            <button type='submit' id='searchbtn'>search</button>
        </div>
        <div className="user">       
            <div className="login">
            <Link to='/login' className='links'> login/signin </Link>
            </div>
            <div className="cart">
                cart  
            </div>
        </div>
    </div>
    <div className="subnav">
        <ul className="content">
              <Link to='/' className='links'><li>Home</li></Link>
              <Link to='/ac' className='links'><li>Ac</li></Link> 
              <Link to='/mobiles' className='links'><li>mobiles</li></Link>
              <Link to='/computers' className='links'><li>computers</li></Link>
              <Link to='/books' className='links'><li>books</li></Link> 
              <Link to='/Watches' className='links'><li>Watches</li></Link> 
              <Link to='/clothes' className='links'><li>clothes</li></Link> 
              <Link to='/shoes' className='links'><li>shoes</li></Link> 
        </ul>
    </div>
     
    </div>
    </> 
  )
}

export default Navbar
