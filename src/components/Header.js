import React from 'react';
import '../index.css';


export const Header = ({onRemoveAll}) => {
  return (
    <div>

        <div className='header'>
            <div className='cart'>
                    <div className='iconCart'><i className="fa-solid fa-cart-shopping"></i></div>
                    <div className='orderSummary'>Order Summary</div>
            </div>
            <button className='simple' 
              onClick={onRemoveAll}
            ><div className='removeAll'>Remove all</div></button>
        </div>

    </div>
  )
}
