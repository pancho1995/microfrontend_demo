import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './components/ShopComponent';

const root = ReactDOM.createRoot(document.getElementById('root-mf'));
const shopName = 'Shop #1'

const App = () => (
  <div>
    <div className='standalone'>Standalone Deployment</div>
    <div className='standalone'>Shop app</div>
    <div className='shop-standalone'>
      <Shop name={shopName}></Shop>
    </div>
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);