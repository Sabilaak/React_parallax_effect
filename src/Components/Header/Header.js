import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-black-transparent shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" 
    type="button"
     data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <Link to='/'>
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
              </Link>
        <Link to='/scroll'>
                <li class="nav-item">
                  <a class="nav-link" href="#">Scroll</a>
                </li>
              </Link>
     
              <Link to='/chart'>
                <li class="nav-item">
                  <a class="nav-link" href="#">Chart</a>
                </li>
              </Link>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header