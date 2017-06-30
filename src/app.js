import React from 'react';
import '../styles/index.scss';

// dumb components don't need the Class syntax so can be just a function like this.
export default function App() {
  return (
    <div>
      <h1>It Works!</h1>
      <p>This React project just works including
        <span className="redBg">module</span> local styles.</p>
      <p>Enjoy!</p>
    </div>
  );
}
