import React from 'react';
// import "../../css/style.css";
// import { Navbar, Form, Button } from 'react-bootstrap';

export default function index() {
    return (
        <div>
           <div>
        <div className="container">
          <header className="row">
            <nav className="col">
              <ul className="nav justify-content-start transition">
                <li className="nav-item">
                  <a className="nav-link link-style" href="/">
                    <strong>Pratyusha Raghupatruni</strong>
                    <sup>
                      <span className="note">®</span>
                    </sup>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link-style" href="/work">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link-style"
                     href="./assets/pdf/Jon-Phoenix-Resume.pdf"
                    download=""
                  >
                    Resume
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
