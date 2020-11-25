import React from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import Sidebar from '../../Components/SideBar';
import './style.css';

export default function main() {
    return (
        <div className='background-img'>
           <Container className='my-5' >
             <Row>
              <Col md={4}><Sidebar/></Col>
              <Col md={7}></Col>
             </Row>
           </Container> 
        </div>
    )
}

