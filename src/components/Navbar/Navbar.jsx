import React from 'react'
import logo from "../../images/logo.png"
import "../../index.css"
import '../../components/Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img width="180px" src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
     
       
         
          <img className='icon_navbar' src="https://icons.veryicon.com/png/o/miscellaneous/fangshan-design_icon/category-18.png" alt="" />
          <a class="nav-link" href="#"><strong>Categorialar</strong></a>
          <div className=' d-flex md:d-flex'>

          
         <input className='input_navbar' type="text" placeholder='Mahsulot qidirish.....' />
        <img className='search_navbar_icon' src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" alt="" />
        </div>
          <a class="nav-link" href="#">Kirish</a>
          <a class="nav-link" href="#">Kirish</a>
          <a class="nav-link" href="#">Kirish</a>
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar