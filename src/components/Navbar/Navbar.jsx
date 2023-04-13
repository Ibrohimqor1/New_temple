import React from 'react'
import logo from "../../images/logo.png"
import "../../index.css"
import '../../components/Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div>

      <nav>
        <div className='container m-auto flex justify-between'>

        
        <div>
        <a className="" href="#"><img width="180px" src={logo} alt="" /></a>
        </div>

        <div>
          <ul className='flex gap-7'>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          </ul>
        </div>

        <div>
          <button>Button</button>
        </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar