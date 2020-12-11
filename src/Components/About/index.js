import React from 'react';
import profile from '../../images/profile.jpeg';


export default function About() {
    return (
       <>
            <div className="container" style={{padding: '20px 0' }}>
              <div className="row">
                <div className="col-12 text-center" style= {{margin: '0 auto',maxWidth: '600px',padding: '0 25px',}}>
                  <p  style={{margin: '20px 10px 0 10px',textAlign: 'justify',fontSize:'1.3em',}}>
                    A Passionate{" "}
                   <strong>Full Stack Web Developer</strong> with
                   a web development certification from <strong>University of Washington</strong>, based in{" "}
                   <strong>Redmond, WA</strong>.{" "}Graduated with <strong>Bachelor of Engineering in Information Technology</strong> from <strong>JNTU Kakinada, India.</strong>
                   {" "}Worked as a <strong>Junior Software Engineer for 2 years </strong> in <strong>Steria, India.</strong>
                 </p>
               </div>
             </div>
            </div>
         <div className="col-12 text-center">
            <div>
               <img style={{width: '220px',margin: '0 auto',display: 'block',clipPath: 'circle(110px at center)'}}
                src={profile}
                alt="Pratyusha Raghupatruni"
               />
           </div>
        </div>
      <div className="row">
        <div className="col-12 text-center" style= {{margin: '0 auto', maxWidth: '600px',padding: '0 25px',}}>
          <p  style={{margin: '40px 10px 60px 10px' ,textAlign: 'justify',fontSize:'1.3em'}}>
             Strong ability to design, build, and maintain websites from conception to production. Ability to work in a fast-paced and diverse team environment developing 
            solutions and exceeding expectations.
            My portfolio features{" "}
            <strong>JavaScript</strong>, HTML, CSS, jQuery, SQL / NoSQL
            Databases, <strong>MERN: Mongo, Express, Node, React</strong>, and
            polished UI interfaces. My work is available{" "}
            <a href="/portfolio">
              <strong>here.</strong>
            </a>
          </p>
        </div>
      </div>
        </>
    )
}
