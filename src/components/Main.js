import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { Header } from './Header';
import { Product } from './Product';
import { Total } from './Total';

const initial_state = [{ id: 1, quantity: 3 }, { id: 2, quantity: 2 }, { id: 3, quantity: 5 }, { id: 4, quantity: 2 }];

export const Main = () => {

  const [cart, setCart] = useState(initial_state);

  //const [billing, setBilling] = useState({});

  useEffect(() => {
    //calculate();

  }, [cart])


  const handleAddProduct = (id) => {

    // buscar si hay el objeto item.id sea el id
    const findItem = cart.filter(item => item.id === id);

    // hacer las validaciones en caso de menor a 0 o en caso de mayor a stock
    if (findItem.quantity <= products.quantity && findItem.quantity > 0){
    // modificar el estado index del producto a modificar, hacer una copia del cart modificando ese producto y finalmente hacer setCart( )
    
    }

  const index = products.findIndex(i => {
      return i.id === id; 
      
    });

    const oldCart = [...cart];
    const newCart = (oldCart[index].quantity +1) 
console.log(newCart);
    setCart(newCart);
    

  }

  const handleSubstractProduct = (id) => {

    // buscar si hay el objeto item.id sea el id
    const findItem = cart.filter(item => item.id === id);

    // hacer las validaciones en caso de menor a 0 o en caso de mayor a stock
    if (findItem.quantity <= products.quantity && findItem.quantity > 0){
    // modificar el estado index del producto a modificar, hacer una copia del cart modificando ese producto y finalmente hacer setCart( )
    
    }

  const index = products.findIndex(i => {
      return i.id === id; 
      
    });

    const oldCart = [...cart];
    const newCart = (oldCart[index].quantity - 1) 
console.log(newCart);
    setCart(newCart);
  }

  const handleDeleteProduct = (id) => {
    // buscar el id en tus objetos para obtener el index

    // filter para quitar ese index

    // del resultado hacer un setCart
  }
/*
  const calculate = () => {
    let subtotal = 0;
    let shipping = 0;
    let taxes = 0;
    let total = 0;

    // recorrer todo el arreglo cart (con un .map ( item => { subtotal =+ item.subtotal }))
    //  (con un .map ( item => { shipping =+ item.shipping }))
    // (con un .map ( item => { taxes =+ item.taxes }))
    const bill = {
      subtotal,
      shipping,
      taxes,
      total
    }

    setBilling(bill);
  }   <Total amounts={billing} /> 
*/
  return (
    <div className='main container'>
      <div>
        <Header />
        <div>
          {
            products.map(item =>
              <Product
              Add={handleAddProduct}
              Sub={handleSubstractProduct}
              Delete={handleDeleteProduct}       
              key={item.id}  
              {...item}
              />)
          }

        </div>
      </div>
      <hr />
   
    </div>
  )
}
