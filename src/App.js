import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.jsx';
import Welcome from './components/welcome.jsx'


function App() {
  return (
    <Fragment>
      <div className="header-container">
        <Header />
      </div>

      <Welcome />
    </Fragment>
  );
}

export default App;
