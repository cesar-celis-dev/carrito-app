import React from 'react';
import '../index.css';


export const Header = ({onRemoveAll}) => {
  return (
    <div>

        <div className='header'>
            <div className='cart'>
                    <button className='icon'><i className="fa-solid fa-cart-shopping"></i></button>
                    <h1>Order Summary</h1>
            </div>
            <button className='simple textTenue' 
              onClick={onRemoveAll}
            ><h2>Remove all</h2></button>
        </div>

    </div>
  )
}
