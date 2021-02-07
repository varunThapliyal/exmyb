import React from  'react';
import {Nav} from 'react-bootstrap';

const RightHeader = ()=>{

   return(
       <div className="right_header md-col-6">     
            <Nav className="justify-content-end" >
                   <Nav.Item>
                      <Nav.Link href="/home">Call Us</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="link-1">Contact us</Nav.Link>
                   </Nav.Item>
              </Nav>
       </div>
   );
}


export default RightHeader;