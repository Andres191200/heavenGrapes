import React, {Fragment, useRef, useState} from 'react';
import ReactDOM from 'react-dom';


import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx';
import InfoSection from './components/InfoSection.jsx';


function App(){

  const scrollDownBtn = React.createRef();

  const [scrollDiv, setScrollDiv] = useState('alalita');

  return (
    <Fragment>
      <div className="header-container">
        <Header />
      </div>
        
      <Welcome/>
      

      <InfoSection/>

    </Fragment>
  );
}

export default App;
