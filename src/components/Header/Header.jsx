import React from  'react';
import './Header.css';
import Logo from './Logo/logo';
import LeftHeader from './LeftHeader/leftHeader';
import RightHeader from './RightHeader/rightHeader';
import {Container,Row,Col} from 'react-bootstrap';

const Header = ()=>{

   return(
       <div className="header">  
              <Logo/>
              <Container className="pt-60">
              <Row className='pt-45'>
                  <Col xs={6}>
                      <LeftHeader/>
                  </Col>
                  <Col xs={6}>
                      <RightHeader/>
                  </Col>
              </Row>
              </Container>   
       </div>
   );
}


export default Header;