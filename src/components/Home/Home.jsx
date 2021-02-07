import React from  'react';
import {Button} from 'react-bootstrap';
import './Home.css';

const Home = ()=>{
      return(      
          <div class="home">
              <div>
              <Button variant="light" size="md"> 70% off for first 3 months</Button>
              </div>
              <h1 class="h1 secondary-font normal">
                   Digital Agency
                   <br/>
                    with Excellence
                   <br/>
                     Services.
              </h1>
               <p>
                   The 3 golden rules professional graphic designer don’t want you to know about.   
               </p>   
               <div>
                  <Button variant="danger" size="lg">More About Us</Button>
                  <Button variant="outline-none secondary-color" size="lg">Live Demo</Button>
               </div>
          </div>
      );
}

export default Home;

