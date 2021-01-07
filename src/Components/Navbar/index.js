import React from 'react';
import "../../assets/css/style.css";

export default function Nav() {
    return (
        <section id="homepage">
        <div className="container-fluid navbarColor ">
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-center fixed-top navbar-dark navbarColor py-2 px-2 " >
                <li className="nav-item">
                   <a className="nav-link li-list" href="#homepage" >Home</a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link li-list" href="#about">
                    About
                  </a> 
                </li>  
                <li className="nav-item" >
                  <a className="nav-link li-list" href="#portfolio">
                    Portfolio
                  </a>  
                </li>

                 <li className="nav-item" >
                  <a className="nav-link li-list" href="#portfolio" >
                  Contact
                  </a>  
                </li>
              </ul>
            </nav>
          </header>
        </div>
       </section>
       

    )
}
