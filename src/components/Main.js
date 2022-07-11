import React, { useState, useEffect } from 'react';
import { products } from '../data/products';
import { Header } from './Header';
import { Product } from './Product';
import { Total } from './Total';

const initial_state = [{ id: 1, quantity: 3 }, { id: 2, quantity: 2 }, { id: 3, quantity: 5 }, { id: 4, quantity: 2 }];

export const Main = () => {

  const [cart, setCart] = useState(initial_state);

  const [billing, setBilling] = useState({});

  useEffect(() => {
    calculate();
  }, [cart])

  const handleAddProduct = (id) => {

    // buscar si hay el objeto item.id sea el id
    const findItem = cart.filter(item => item.id === id);
    const indexProduct = products.findIndex(i => {
      return i.id === id;     
    });
    // hacer las validaciones en caso de menor a 0 o en caso de mayor a stock
    if (findItem[0].quantity === products[indexProduct].quantity) return; 
    // modificar el estado index del producto a modificar, hacer una copia del cart modificando ese producto y finalmente hacer setCart( )
        

    const oldCart = [...cart];  
    const newCart = oldCart.map((e) =>{
        if(e.id === id){
          return {...e,
            quantity: e.quantity + 1
            }
        }else{
          return e;
        }
    })
    console.log(newCart);
    setCart(newCart);

  }

  const handleSubstractProduct = (id) => {

    // buscar si hay el objeto item.id sea el id
    const findItem = cart.filter(item => item.id === id);

    // hacer las validaciones en caso de menor a 0 o en caso de mayor a stock
    if (findItem[0].quantity === 1) return; 
    // modificar el estado index del producto a modificar, hacer una copia del cart modificando ese producto y finalmente hacer setCart( )
    
    const oldCart = [...cart];  
    const newCart = oldCart.map((e) =>{
        if(e.id === id){
          return {...e,
            quantity: e.quantity - 1
            }
        }else{
          return e;
        }
    })
    console.log(newCart);
    setCart(newCart);
  }

  const handleDeleteProduct = (id) => {
    // buscar el id en tus objetos para obtener el index

    // filter para quitar ese index
    const oldCart = [...cart];
    const newCart = oldCart.filter( ( e ) => e.id !== id );
    console.log(newCart);

    setCart(newCart);   
  }

  const handleRemoveAll = () =>{
    setCart([])
  }

  const calculate = () => {
    let subtotal = 0;
    let shipping = 0;
    let taxes = 0;
    let total = 0;

    // recorrer todo el arreglo cart (con un .map ( item => { subtotal =+ item.subtotal }))
    cart.map(item => {
      const indexProduct = products.findIndex(i => {
        return i.id === item.id;     
      });
      const product = products[indexProduct];
      subtotal = subtotal + item.quantity*product.priceWT;
      taxes =taxes+ item.quantity*product.tax;
      shipping =shipping+ item.quantity*product.shippingFee;
    });
    total= subtotal+shipping+taxes;
    //  (con un .map ( item => { shipping =+ item.shipping }))
    // (con un .map ( item => { taxes =+ item.taxes }))
    const bill = {
      subtotal,
      shipping,
      taxes,
      total
    }

    setBilling(bill);
  } 

  return (
    <div className='main container'>
      <div>
        <Header onRemoveAll={handleRemoveAll} />
        <div>
          {
            cart.map(item =>
              {
                const index = products.findIndex(i => {
                  return i.id === item.id;     
                });
              return  (<Product
              onAdd={handleAddProduct}
              onSub={handleSubstractProduct}
              value={item.quantity}
              onDelete={handleDeleteProduct}       
              key={item.id}  
              id={item.id}
              name={products[index].name}
              description={products[index].description}
              priceWT={products[index].priceWT}
              />)
            })
          }

        </div>
      </div>
      <hr />
          <Total ticket={billing} />
    </div>
  )
}
