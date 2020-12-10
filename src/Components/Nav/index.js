import React from 'react';
// import "../../css/style.css";
// import { Navbar, Form, Button } from 'react-bootstrap';

export default function Nav() {
    return (
        <div>
           <div>
        <div className="container">
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-start transition">
                <li className="nav-item">
                  <a className="nav-link link-style" href="/">
                    <strong style={{fontSize:'25px',color:'black'}}>Pratyusha Raghupatruni</strong>
                    <sup>
                      <span className="note">®</span>
                    </sup>
                  </a>
                </li>
                <li className="nav-item" style={{fontSize:'25px',color:'black'}}>
                  <a className="nav-link link-style" href="/portfolio">
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
        </div>
    )
}
