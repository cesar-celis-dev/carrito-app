import React from 'react';
import { pictures } from '../helpers/Images';
import '../index.css';


export const Header = () => {
  return (
    <div>

        <div className='header'>
            <div className='cart'>
                    <img src= {pictures[0]} alt="cart" width="70" height="70" />
                    <h1>Order Summary</h1>
            </div>
            <button className='simple'><h1>Remove all</h1></button>
        </div>

    </div>
  )
}
