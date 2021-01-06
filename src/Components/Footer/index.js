/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className='footer mt-3 text-center' style={{ padding: '25px 0px'}}>
                <div className ='container mb-3' >
                   <a href='https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/' ><i class='fa fa-linkedin linkedln' 
                      style={{ fontSize:'30px',color :'black',marginRight : '30px'}}></i></a>
                   <a href='https://github.com/PratyushaRaghupatruni'><i class='fa fa-github github'  
                      style={{ fontSize:'30px',color :'black',marginRight : '30px'}}></i></a>
                   <a href='mailto:pratyusha.raghupatruni@gmail.com'><i class='fa fa-envelope mail'
                       style={{fontSize:'30px',color:'black', marginRight : '30px',}}></i></a>
                  <a href='https://docs.google.com/document/d/10B8XLsG32NMiA7ZvEqN4rH3jcebooHYqEGTxERoeVEU/edit '><i class="fa fa-file-text"
                       style={{fontSize:'30px',color:'black'}}></i></a>
                <br />
                <p className="copyright mt-2" style={{ fontSize:'1.1em',color :'black',marginRight : '30px',marginTop:'15px'}}>
                  ©{" "}
                   <a className="link-pratyusha text-center" href="https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/">
                    Pratyusha Raghupatruni
                   </a>{" "}
                    2020
                </p>
              </div>
         </footer>
        </>
    )
}
