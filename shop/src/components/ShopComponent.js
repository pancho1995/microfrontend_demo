import React from 'react';
import '../App.css';
import logo from '../logo.png';
import ('./VueComponent.js');

function Shop({name}) {
    return (
      <>
        <div className='shop'>
          <div className='wrap'>
            <img src={logo} alt="logo" className='img'/>
            <div className='shop-details'>
              <div className='title'> {name} </div>
              <div className='product-list' id={name}></div>
            </div>
          </div>
        </div>
      </>
    ) 
} 

export default Shop;