import React, { useState } from 'react';
import {pictures} from "../helpers/Images";


export const Product = ({info}) => {

const [count, setCount] = useState(0)

    const handleSuma = (() => {
        setCount(count+1)
    })

    const handleResta =(() => {
        setCount(count-1)
    })

  return (
    <div>

        <div className='product'>

            <div className='item'>
                <div className='imgdiv'>
                    <img src={pictures[1]} alt="laptop" width="150" height="150" />
                </div>
                <div className='information'>
                    <h2>Laptop</h2>
                    <button className='simple'>Information</button>
                </div>
            </div>


            <div className='operation'>
                <button
                    className='btnProduct'
                    onClick={handleSuma}
                > + </button> 

                {count} 

                <button
                    className='btnProduct'
                    onClick={handleResta}
                > - </button>
                {info.priceWT}

            </div>

        </div>

    </div>
  )
}
