
import React from 'react';
import resume from '../../images/resume.pdf';
// import {useTrail, animated} from 'react-spring';
import '../../assets/css/style.css';

export default function index() {
    return (
        <>
        <div className= "text-left home justify-content-center text-white">
        <div className ="container-fluid "> 
        <h3 className="header-name" > Hi,</h3>
        <h3 className="header-name ">I'm Pratyusha Raghupatruni</h3>
        <p className="header-description ">Full Stack Web Developer, Redmond , Washington</p>
        <div className =' mb-3 mt-5 ' >
            
            <a href="https://github.com/PratyushaRaghupatruni" className="btn icons" title="Github" target="_blank" rel="noopener noreferrer"
                style={{fontSize:35, color:'#E8E8E8', marginRight:10}}><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/pratyusha-raghupatruni-96a35832/" className="btn icons" title="Linkedin"
                target="_blank" rel="noopener noreferrer" style={{fontSize:35,color:'#E8E8E8',marginRight:10}}><i className="fab fa-linkedin"></i></a>
            <a href="mailto:pratyusha.raghupatruni @gmail.com" className="btn icons" title="Email" target="_blank" rel="noopener noreferrer"
                style={{fontSize:35, color:'#E8E8E8', marginRight:10}}><i className="fas fa-envelope"></i></a>
            <a href= { resume } className="btn  icons" title="Resume" target="_blank" rel="noopener noreferrer"
                style={{fontSize:35, color:'#E8E8E8'}}><i className="fas fa-file-pdf"></i></a>
                 
        </div>
        <p className="scrolldown">
          <a href="#aboutme"><i className="fa fa-chevron-circle-down down-arrow" ></i></a>
        </p>
        </div>
      </div> 
      </>
      
    
    )
}

