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

function App() {
  return (
    <AppContainer>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={CoinCapAPI} />
          <Route path=":coinName" component={CoinDetails} />
        </div>
      </Router>
    </AppContainer>
  );
}

render(<App />,
document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    render(
      <App />,
      document.querySelector('#app'),
    );
  });
}
