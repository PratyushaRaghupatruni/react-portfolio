import React from 'react';
import profile from '../../images/profile.jpeg';
import "../../assets/css/style.css";




export default function About() {
    return (
       <> 
        <div id="aboutme">
            <div className="container" style={{ padding: '20px' }}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-12">
                 <h2 className="text-center header-aboutme">About Me</h2>
                </div>
               </div> 
               <hr className="line"></hr>


              <div className="row">
                <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center" >

                   <div>
                     <img style={{width: '220px',margin: '0 auto',display: 'block',clipPath: 'circle(110px at center)'}}
                       src={profile}
                       alt="Pratyusha Raghupatruni"
                     />
                   </div>
                </div>  
                <div className="col-md-9 col-sm-12 " style={{ margin: '0 auto', padding: '0 25px'}}	>
                  <p className='aboutme-description' >
                    A Passionate{" "}
                   Full Stack Web Developer with
                   a web development certification from University of Washington, based in{" "}
                   Redmond, WA.{" "}Graduated with Bachelor of Engineering in Information Technology from Jawaharlal Nehru Technology University, Kakinada, India.
                   {" "}Worked as a Junior Software Engineer for 2 years  in Steria, India.
                 </p>

                  <p className='aboutme-description'>
                    I have a Strong ability to design, build, maintain websites from conception to production and ability to work in a fast-paced , diverse team environment developing 
                    solutions and exceeding expectations.
                  </p>

                  <p className='aboutme-description' >  
                    My portfolio features{" "}
                    JavaScript, HTML, CSS, jQuery, SQL / NoSQL
                    Databases, MERN: Mongo, Express, Node, React and
                    polished UI interfaces. My work is available{" "}
                   <a href="#portfolio">
                   <strong>here.</strong>
                   </a>
                  </p>
              
              </div>
              </div>
            </div>
            <br></br>
            <br></br>
        </div>
       
        </>
    )
}
