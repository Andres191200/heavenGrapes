import React, {Fragment} from 'react';

import Header from './header.jsx';
import Welcome from './welcome.jsx';
import ProductSection from './productSection.jsx';
import InfoSection from './infoSection.jsx';


function mainPage(){

  return(
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

export default mainPage;