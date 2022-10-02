import React from 'react'
import { useState } from 'react'


 const Navbar = () => {

    const [account,setAccount] = useState()
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ar Dapps</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>


    {
        account?<li className="nav-item">
        <a className="nav-link" href="#">Account Profile {account}</a>
      </li>:<li className="nav-item">
          <button className=" btn btn-danger" >Connect Wallet</button>
        </li>
    }
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
