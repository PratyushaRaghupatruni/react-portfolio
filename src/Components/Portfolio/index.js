import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function Portfolio(props) {
  return (
    <div>
      <Nav />
      <Container>
        <h4>Portfolio Page</h4>
        <Row>
          <Col lg={4}>
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
                <Card.Text>{props.project.description}</Card.Text>
                <div className="buttons">
                  <a
                    className="btn btn-dark button"
                    href={props.project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App
                  </a>
                  <a
                    className="btn btn-dark button"
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
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
