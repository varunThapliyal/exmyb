import React from  'react';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Footer from '../../components/Footer/Footer';
import './Homepage.css';
const  Homepage= ()=>{

      return(
          <div className='primary-font primary-color'>
              <Header/>
              <Home/>
              <Footer/>
          </div>
      );
}

export default Homepage;

