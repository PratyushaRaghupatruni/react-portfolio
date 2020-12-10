/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './style.css';




export default function Footer() {
    return (
        <>
            <footer class='footer mt-auto py-3 fixed-bottom'>
                <div class='container' >
                   <a href='https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/' ><i class='fa fa-linkedin linkedln' 
                      style={{ fontSize:'36px',color :'black',marginRight : '15px'}}></i></a>
                   <a href='https://github.com/PratyushaRaghupatruni'><i class='fa fa-github github'  
                      style={{ fontSize:'36px',color :'black',marginRight : '15px'}}></i></a>
                   <a href='mailto:pratyusha.raghupatruni@gmail.com'><i class='fa fa-envelope mail'
                       style={{fontSize:'36px',color:'black', marginRight : '15px',}}></i></a>
                  <a href='https://docs.google.com/document/d/10B8XLsG32NMiA7ZvEqN4rH3jcebooHYqEGTxERoeVEU/edit '><i class="fa fa-file-text"
                       style={{fontSize:'36px',color:'black'}}></i></a>
              </div>
  </footer>
             
        </>
    )
}
