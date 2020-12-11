import React from 'react';
import {Col,Row} from 'react-bootstrap';
import Nav from '../../Components/Nav';
import About from '../../Components/About';
import Footer from '../../Components/Footer';
import './style.css';

export default function main() {
    return (
        <div className="background-img">
             <Row>
              <Col md={12}><Nav /></Col>
              </Row>
              <Row className="mb-3"> 
                <Col md ={3}></Col>
                <Col md={6} className="my-3" stye={{padding:'20px'}}><About /></Col>
                <Col md={3}></Col>
              </Row>
              <Col md={12} className="mt-3" ><Footer /></Col>
        </div>
    )
}

