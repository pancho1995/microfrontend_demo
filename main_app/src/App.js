import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/AppHeader';
import ShopCatalogue from './components/ShopCatalogue';
import ('./components/Trending');

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
    <div>
      <AppHeader color='secondary'/>
      <div className='wrap'>
        <div className='shop-catalogue'>
          <ShopCatalogue numberOfShops={2}/>
        </div>
        <div className='trending-products'>
          <div className='title-trening'>Trending products</div>
          <div id='trending' className='trending'></div>
        </div>
        
      </div>
    </div>
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
