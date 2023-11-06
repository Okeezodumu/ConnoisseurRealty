import React from 'react'

import './Nav.css'


React
const Nav = ()=>{
    return (
        <div className='nav'>
          
          <img src="Connos/Company logo.png" className='navimg' alt="" />
             {/* <h1>Connoi<font>sseur</font> Realty</h1> */}
        <ul className='navlink'>
           <li><a href="/">Home</a></li>
           <li><a href="/contact">About</a></li>
           <li><a href="/designs"> Newsletter</a></li>
           <select name="Menu" id="design">
            <option value="1">Menu</option>
            <option value="2">Designs/3d render</option>
            <option value="2">Working Drawings</option></select>
        </ul> 
            </div>
      )

}
  


export default Nav