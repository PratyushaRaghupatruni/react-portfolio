import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function Portfolio(props) {
  return (
   
<>
          <Col lg={4} style={{ padding: '20px',backgroundColor: 'transparent',}}>
            <Card
              style={{
                padding: '18px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                boxShadow: ' 3px 3px 12px 0 #a9a9a9',
                textAlign: 'center',
              }}
            >
              <Card.Img variant="top" src={props.project.imageUrl} />
              <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text style={{fontSize:'1.2em'}}>{props.project.description}</Card.Text>
                <div className="buttons">
                  <a
                    className="btn btn-dark"
                    href={props.project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </a>
                  <a
                    className="btn btn-dark"
                    href={'https://github.com/' + props.project.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
  
      {/* <Footer /> */}
  </>
  );
}
