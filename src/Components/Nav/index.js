import React from 'react';
// import "../../css/style.css";
// import { Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
           <div>
        <div className="container " style={{padding :'15px'}}>
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-start transition">
                <li className="nav-item">
                  <a className="nav-link link-style" href="/">
                    <strong style={{ fontSize: '1.5em',color:'black'}}>Pratyusha Raghupatruni</strong>
                    <sup>
                      <span className="note" style={{fontSize:'2em',color:'black'}}>®</span>
                    </sup>
                  </a>
                </li>
                <li className="nav-item" style={{fontSize:'1.5em',color:'black'}}>
                  <Link className="nav-link link-style" to="/portfolio" style={{  fontSize: '25px',color: 'black',}}>
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
        </div>
    )
}
