import React from 'react';
import profile from '../../images/profile.jpeg';


export default function About() {
    return (
       <>
            <div className="container" style={{padding: '25px 0' }}>
              <div className="row">
                <div className="col-12 text-center" style= {{margin: '0 auto',maxWidth: '600px',padding: '0 25px',}}>
                  <p  style={{margin: '20px 0',textAlign: 'justify',fontSize:'1.2em',}}>
                    A multicultural{" "}
                   <strong>front-end web developer and graphic designer</strong> with
                   a strong background in <strong>branding</strong>, based in{" "}
                   <strong>Seattle, WA</strong>. I see everything through the lens of
                   possibilities, progress, challenges and solutions. I am constantly
                   looking for learning new skills, experimenting with new ideas, and
                   delivering excellent design execution.
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
          <p  style={{margin: '40px 0',textAlign: 'justify',fontSize:'1.2em'}}>
            A selection of web applications showcasing the broad palette of{" "}
            <strong>
              full-stack web development technologies, and UI/UX skills
            </strong>{" "}
            that define my process. Proudly featuring{" "}
            <strong>"5 Sherpas", "Breakaway", and "Discover Serenity"</strong>,
            the remarkably creative result of a team collaboration as a member
            of{" "}
            <a className="link-jon" href="https://github.com/MVC-5">
              <strong>MVC-5</strong>
            </a>
            , a group of full-stack web developers. This portfolio features{" "}
            <strong>JavaScript</strong>, HTML, CSS, jQuery, SQL / NoSQL
            Databases, <strong>MERN: Mongo, Express, Node, React</strong>, and
            polished UI interfaces. See my work{" "}
            <a className="link-jon" href="/work">
              <strong>HERE.</strong>
            </a>
          </p>
        </div>
      </div>
        </>
    )
}
