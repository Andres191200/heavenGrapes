import React, {Fragment, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import MainPage from './components/mainPage.jsx';
import Login from './components/login.jsx';


function App(){
  return(

    <BrowserRouter>
      <Switch>
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
