import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CoinCapAPI from './containers/CoinCapAPI';
import SearchBar from './components/SearchBar';

render(<AppContainer><CoinCapAPI /></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./app.js', () => {
    render(
      <AppContainer>
        <SearchBar />
        <CoinCapAPI />
      </AppContainer>,
      document.querySelector('#app'),
    );
  });
}
