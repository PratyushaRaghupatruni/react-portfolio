import React from 'react';
// import "../../css/style.css";
// import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
           <div>
        <div className="container " style={{padding :'25px'}}>
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-start transition">
                <li className="nav-item">
                   <Link className="nav-link link-style" style={{ fontSize: '1.5em',color:'black',fontWeight:'bold'}} to="/">Pratyusha Raghupatruni</Link>
                </li>
                <li className="nav-item" style={{fontSize:'1.5em',color:'black'}}>
                  <a className="nav-link" href="#portfolio" style={{ color: 'white'}}>
                    Portfolio
                  </a>  
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    )
}
