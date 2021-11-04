import React, {Fragment, useRef as UseRef} from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import ProductSection from './productSection.jsx';
import InfoSection from './infoSection.jsx';


function mainPage(){


  const buttonRef = UseRef();
  



  return(
    <Fragment>
      <Header/>
          
      <Welcome ref={buttonRef}/>    

      <ProductSection ref={buttonRef}/>

      <InfoSection/>

    </Fragment>
    );
}

export default mainPage;