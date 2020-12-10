import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import Nav from '../../Components/Nav';
import './style.css';

export default function main() {
    return (
        <div className='background-img'>
           <Container className='my-5' >
             <Row>
              <Col md={12}><Nav /></Col>
              {/* <Col md={7}></Col> */}
             </Row>
           </Container> 
        </div>
    )
}

