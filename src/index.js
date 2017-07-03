import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import CoinCapAPI from './containers/CoinCapAPI';

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
