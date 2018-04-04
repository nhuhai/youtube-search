import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
