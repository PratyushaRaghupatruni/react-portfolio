/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import resume from '../../images/resume.pdf';
import '../../assets/css/style.css';

export default function Footer() {
    return (
        <>
            <footer className='footer text-center' style={{ padding: '20px 20px'}}>
                 <div id="go-top">
                     <a className="smoothscroll" href="#homepage" ><i className="fa fa-chevron-circle-up up-arrow" ></i></a>
                  </div>
                 
                <div className ='container mb-3' >
                   <a href='https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/' className="btn  icons"><i class='fa fa-linkedin linkedln' 
                      style={{ fontSize:30,color :'#E8E8E8',marginRight : '30px'}}></i></a>
                   <a href='https://github.com/PratyushaRaghupatruni' className="btn  icons"><i class='fa fa-github github'  
                      style={{ fontSize:30,color :'#E8E8E8',marginRight : '30px'}}></i></a>
                   <a href='mailto:pratyusha.raghupatruni@gmail.com' className="btn icons"><i class='fa fa-envelope mail'
                       style={{fontSize:30,color:'#E8E8E8', marginRight : '30px',}}></i></a>
                  <a href= { resume } className="btn  icons" title="Resume" target="_blank" rel="noopener noreferrer"
                      style={{fontSize:30, color:'#E8E8E8'}}><i className="fas fa-file-pdf"></i></a>
                  
                <br />
                <p className="copyright mt-2 text-center" style={{ color :'#a6a6a6',marginRight : '30px',marginTop:'15px'}}>
                    © Pratyusha Raghupatruni 2020
                </p>
              </div>
         </footer>
        </>
    )
}
