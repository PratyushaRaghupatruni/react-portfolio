import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function Portfolio(props) {
  return (
   
<>
          <Col lg={4} style={{ padding: '20px',backgroundColor: 'transparent',}}>
            <Card
              style={{
                borderRadius: '10px',
                 backgroundColor: '#FFDEE9',
                 backgroundImage: 'linear-gradient(238deg,#e1d3d7 20%, #769fbf 80%)',
                boxShadow: ' 1px 1px 1px 0 #a9a9a9',
                textAlign: 'center',
              }}
            >
              <Card.Img variant="top" src={props.project.imageUrl}/>
              <Card.Body>
                <Card.Title style={{fontSize:'1.3em'}}><strong>{props.project.title}</strong></Card.Title>
                <Card.Text style={{fontSize:'1.2em', textAlign: 'left',color: '#444444',padding: '15px'}}>{props.project.description}</Card.Text>
                <div>
                  <a style={{ minWidth: '100px',margin: '15px 10px 5px',}}
                    href={props.project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class='fas fa-globe' style={{fontSize:'24px'}}></i>
                  </a>
                  <a style={{ minWidth: '60px',margin: '15px 10px 5px',}}
                    href={'https://github.com/' + props.project.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class='fa fa-github github' style={{fontSize:'30px'}}></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
  </>
  );
}
