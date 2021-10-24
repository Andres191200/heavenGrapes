import React, {Fragment, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import Login from './components/login.jsx';
import Product from './components/product.jsx';

import cards from './cards.json'


function App(){

  const productPaths = () =>{
    cards.map((card,index) =>
        <Route path={'/product/' + index}>
          <Product product={index} content={card}/>
        </Route>
    )
  }

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
