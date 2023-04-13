import React from 'react'
import logo from "../../images/logo.png"
import "../../index.css"
import '../../components/Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img width="180px" src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
     
       
         
          <img className='icon_navbar' src="https://icons.veryicon.com/png/o/miscellaneous/fangshan-design_icon/category-18.png" alt="" />
          <a className="nav-link" href="#"><strong>Categorialar</strong></a>
          <div className=' d-flex md:d-flex'>

          
         <input className='input_navbar' type="text" placeholder='Mahsulot qidirish.....' />
     
        </div>
          <a className="nav-link" href="#">Kirish</a>
          <a className="nav-link" href="#">Kirish</a>
          <a className="nav-link" href="#">Kirish</a>
      </ul>
      <form class="d-flex">
        
       
       <img className='w-32 bg-green-950' src="https://ishonchsavdo.uz/assets/images/icon-product.svg" alt="" />
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar