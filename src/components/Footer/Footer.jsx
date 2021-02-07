import React from  'react';
import {Container,Row,Col} from 'react-bootstrap';


const Footer = ()=>{

   return(
            <footer class="footer secondary-color">
              <Container className="pt-60">
              <Row>
                  <Col xs={3}>
                      <h5 className='h5 primary-color'>Rogan</h5>
                      <ul className='pl-0'>
                          <li href="" className='secondary-color'>v@gmail.com</li>
                          <li href="" className=''>88 8888 8888</li>
                      </ul>        
                  </Col>
                  <Col xs={3}>
                      <h5 className='h5 primary-color'>Services</h5>
                      <ul className='pl-0'>
                          <li>Web Design</li>
                          <li>Development</li>
                          <li>Wordpress</li>
                          <li>Online Marketing</li>
                          <li>Content</li>
                      </ul>
                  </Col>
                  <Col xs={3}>
                  <h5 className='h5 primary-color'>About Us</h5>
                      <ul className='pl-0'>
                          <li>About Us</li>
                          <li>Work Portfolio</li>
                          <li>Team</li>
                          <li>Plan and Pricing</li>
                          <li>News</li>
                      </ul>
                  </Col>
                  <Col xs={3}>
                  <h5 className='h5 primary-color'>Our Address</h5>
                      <ul className='pl-0'>
                          <li>Rohini</li>
                          <li>Delhi 110085</li>
                      </ul>
                  </Col>
              </Row>
              </Container>   


            </footer>
   );
}


export default Footer;