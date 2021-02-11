import React from 'react';
import "../../assets/css/style.css";

export default function Nav() {
    return (
        <section id="homepage">
        <div className="container-fluid navbarColor ">
            <nav >
              <ul className="navbar nav justify-content-center fixed-top navbar-dark navbarColor " >
                <li className="nav-item">
                   <a className="nav-link li-list" href="#homepage" >HOME</a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link li-list" href="#aboutme">
                    ABOUT
                  </a> 
                </li>  
                <li className="nav-item" >
                  <a className="nav-link li-list" href="#portfolio">
                    PORTFOLIO
                  </a>  
                </li>

              </ul>
            </nav>
            </div>
       </section>
       

    )
}
