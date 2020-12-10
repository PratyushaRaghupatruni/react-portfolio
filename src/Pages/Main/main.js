import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import Nav from '../../Components/Nav';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import './style.css';

export default function main() {
    return (
        <div className='background-img'>
           <Container className='my-5' >
             <Row>
              <Col md={12}><Nav /></Col>
              </Row>
              <br />
              <br />
              <br />
              <Row> 
                <Col md ={2}></Col>
                <Col md={8}><About /></Col>
                <Col md={2}></Col>
              </Row>
              <Col md={12}><Footer /></Col>
           
           </Container> 
        </div>
    )
}

