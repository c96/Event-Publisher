import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Main from './Main';
//import './styles/app.css';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <div>
      <Header />
      <Main />
    </div>
  </React.Fragment>
);

export default App;