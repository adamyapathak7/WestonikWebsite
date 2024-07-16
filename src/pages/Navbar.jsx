import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-black bg-body-tertiary  sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <i className="bi bi-shop "><h3 className='outline-primary'>WESTONIk</h3></i>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
           </Link>
           <ul className="dropdown-menu">
             <li><Link className="dropdown-item" href="#">Action</Link></li>
             <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>           </ul>
        </li>
         <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Industry
           </Link>
           <ul className="dropdown-menu">
             <li><Link className="dropdown-item" href="#">Action</Link></li>
             <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
         </li> 
        <li className="nav-item dropdown">
         <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Clone Apps
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Action</Link></li>
           <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
       </li> 
      
        <form className="d-flex" role="search">
  
   <button className="btn btn-outline-primary navbar-white" type="submit">Get In Touch</button> </form> 
             </ul>
          </div>
        </div>
      </div>
    </nav>
    
    
  );
 


};

export default Navbar;

        


  



