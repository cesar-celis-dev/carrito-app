import React from 'react';
import { products } from '../data/products';
import { Header } from './Header';
import { Product } from './Product';


export const Main = () => {
  return (
    <div className='container'>
      <div>
        <Header />
        {products.map(item => <Product info={item} />)}

      </div>
    </div>
  )
}
//se actualizo el 09