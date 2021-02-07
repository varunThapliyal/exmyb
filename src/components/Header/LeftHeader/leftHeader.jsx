import React from  'react';
import './leftHeader';
import {Nav} from 'react-bootstrap';

const LeftHeader = ()=>{

   return(
       <div className="left_header md-col-6">
              <Nav className="justify-content-end" >
                   <Nav.Item>
                      <Nav.Link href="/home">Home</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="link-1">Pages</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="link-2">Features</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="link-3">
                         Elements
                     </Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="link-3">
                         News
                     </Nav.Link>
                   </Nav.Item>
              </Nav>
       </div>
   );
}
export default LeftHeader;