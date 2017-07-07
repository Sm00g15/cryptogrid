import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import CoinCapAPI from './containers/CoinCapAPI';
import CoinDetails from './containers/CoinDetails/';
import Nav from './components/Nav';


render(<AppContainer><CoinCapAPI /></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    render(
      <AppContainer>
        <Router>
          <Nav />
          <Route exact path="/" component={CoinCapAPI} />
          <Route path=":coinName" component={CoinDetails} />
        </Router>
      </AppContainer>,
      document.querySelector('#app'),
    );
  });
}
