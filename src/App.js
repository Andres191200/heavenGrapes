import React, {Fragment, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {firebaseConfig} from './firebase/firebaseUtil';

import MainPage from './components/mainPage.jsx';
import Login from './components/login.jsx';
import Product from './components/product.jsx';
import AboutUs from './components/aboutUs.jsx';
import Signup from './components/signup.jsx';
import Contact from './components/contact.jsx';

import cards from './cards.json'

firebaseConfig();

function App(){
  return(

    <BrowserRouter>
      <Switch>
        {
          cards.map((card,index) =>
            <Route path={'/product/' + index}>
              <Product product={index} content={card}/>
            </Route>
            )
        }


        <Route path="/Contact">
          <Contact/> 
        </Route>

        <Route path="/Signup">
          <Signup/>
        </Route>

        <Route path="/AboutUs">
          <AboutUs/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <MainPage/>
        </Route>  

        




      </Switch>
    </BrowserRouter>
    );
  
}

export default App;
