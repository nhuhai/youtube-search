import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const API_KEY = 'AIzaSyBGC8P3FA40zy94S217tbCR3uvXRCDFb_g';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
