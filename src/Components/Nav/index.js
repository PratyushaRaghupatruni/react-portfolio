import React from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';

export default function index() {
    return (
        <div>
            <Navbar className="bg-light justify-content-between">
                <h3>About</h3>
             <Form inline>
               <Button type="submit">Projects</Button>
             </Form>
           </Navbar>
        </div>
    )
}
