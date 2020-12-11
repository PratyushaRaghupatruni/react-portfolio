import React from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import profile from '../../images/profile.jpeg';

export default function About() {
    return (
        <div className="container card shadow" stye={{padding:'20px',}}>
                <Row>
                {/* <Col md={4}>   
                 <img className="my-3 mx-3" src={profile} alt='profile' style={{ width: '220px', margin: '0 auto',display: 'inline-block', clipPath: 'circle(110px at center)'}}/>
                </Col> */}
                <Col md={8} >
                     <img className="my-3 mx-3" src={profile} alt='profile' style={{ width: '220px', margin: '0 auto',display: 'inline-block', clipPath: 'circle(110px at center)'}}/>
                <h3 className="mx-3 my-3" stye={{padding:'20px',marginTop:'20px'}} >About Me</h3>
                 <hr></hr>
                 <p  style={{padding:'20px',marginTop:'10px',fontSize:'20px'}}>Passionate and solutions-driven full stack web developer with a Web Development Certificate
                 from the University of Washington and graduated with Bachelor of Engineering in Information 
                 Technology from JNTU Kakinada, India. Worked as ‘Junior Software Engineer’ in Steria ,India for 
                 nearly 2 years..
                 </p> 
               </Col>
              </Row> 
              <Row>
              <Col md={12}>
                  <p style={{padding:'20px',marginTop:'20px',fontSize:'20px'}}>Strong ability to design, build, and maintain websites from conception to production.
                  Ability to work in a fast-paced and diverse team environment developing solutions and 
                  exceeding expectations.
                  </p>
              </Col>
              </Row>
        </div>
    )
}
