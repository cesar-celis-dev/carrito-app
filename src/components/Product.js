import React, { useState } from 'react';
import {pictures} from "../helpers/Images";


export const Product = ({
    id,
    name,
    description,
    priceWT
}) => {

    const [count, setCount] = useState(0)

    const handleAdd = (() => {
        setCount(count+1)
    })
  
    const handleSubstract =(() => {
        setCount(count-1)
    })
  

  return (
    <div>

        <div className='product'>

            <div className='item'>
                <div className='imgdiv'>
                    <img src={pictures[id]} alt={name} width="150" height="150" />
                </div>
                <div className='information'>
                    <h2>{name}</h2>
                    <h4 className='textTenue'>{description}</h4>
                </div>
            </div>


            <div className='operation'>
                <div className='btnProduct'>
                    <button
                        className='icon'
                        onClick={handleAdd}
                    > <i class="fa-solid fa-plus"></i> 
                    </button> 
                </div>

                <h1 className='text-center'>{count}</h1> 

                <div className='btnProduct'>
                    <button
                        className='icon'
                        onClick={handleSubstract}
                    > <i class="fa-solid fa-minus"></i> 
                    </button>
                </div>

                <h1>${priceWT}</h1>
                <button className='icon'><i class="fa-solid fa-trash-can"></i></button>
            </div>


        </div>

    </div>
  )
}
