import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../../assets/css/style.css';

export default function Portfolio(props) {
  return (
   
<>
          <Col lg={4} style={{ padding: '20px',backgroundColor: 'transparent',}}>
            <Card className='card-style'
              style={{
                borderRadius: '10px',
                boxShadow: ' 1px 1px 1px 0 #a9a9a9',
                textAlign: 'center',
              }}
            >
              <Card.Img variant="top" src={props.project.imageUrl}/>
              <Card.Body>
                <Card.Title className ='card-title'>
                <strong>{props.project.title}</strong>
                </Card.Title>
                <Card.Text style={{fontSize:'1.2em', textAlign: 'left',color: '#444444',padding: '15px'}}>{props.project.description}</Card.Text>
               
                <div className='float-left'>
                  <button className='btn-grad ' style={{ minWidth: '60px',margin: '0px 0px 10px 20px',}}>Details</button>
                </div>  
                 <div className="float-right " style={{ margin: '8px 0px 20px 20px',}}>
                     <a  style={{ minWidth: '60px',margin: '0px 0px 20px 20px',}}
                      href={props.project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                     >
                       <i className ='fas fa-globe globeicon ' style={{fontSize:'30px'}}></i>
                    </a>
                  <a   style={{ minWidth: '60px',margin: '0px  0px 20px 20px',}}
                    href={'https://github.com/' + props.project.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className ='fa fa-github githubicon ' style={{fontSize:'36px'}}></i>
                  </a>
                  </div>
              </Card.Body>
            </Card>
          </Col>
  </>
  );
}
