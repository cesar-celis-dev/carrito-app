import React from 'react';
import { products } from '../data/products';
import { Header } from './Header';
import { Product } from './Product';
import {Total} from './Total';


export const Main = () => {



  return (
    <div className='main container'>
      <div>
        <Header />
        {
          products.map(item => 
          <Product        
            key={item.id}  
            {...item}
          />)
        }

      </div>
      <hr/>
      <Total />
    </div>
  )
}
