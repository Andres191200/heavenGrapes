import React, {Fragment, useRef, useState} from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx';
import ProductSection from './components/productSection.jsx';
import InfoSection from './components/infoSection.jsx';


function App(){

  const scrollDownBtn = React.createRef();

  const [scrollDiv, setScrollDiv] = useState('alalita');

  return (
    <Fragment>
      <div className="header-container">
        <Header />
      </div>
        
      <Welcome/>
      

      <ProductSection/>

      <InfoSection/>

    </Fragment>
  );
}

export default App;
