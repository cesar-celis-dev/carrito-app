import React from 'react';
import {pictures} from "../helpers/Images";


export const Product = ({
    id,
    name,
    description,
    priceWT,
    onAdd,
    onSub,
    onDelete,
    value
}) => {

  return (
    <div>

        <div className='product'>

            <div className='item'>
                <div className='imgdiv'>
                    <img src={pictures[id-1]} alt={name} width="150" height="150" />
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
                        onClick={() => onSub(id)}
                    >  <i className="fa-solid fa-minus"></i>
                    </button> 
                </div>

                <h1 className='text-center'>{value}</h1> 

                <div className='btnProduct'>
                    <button
                        className='icon'
                        onClick={() => onAdd(id)}                 
                    >  <i className="fa-solid fa-plus"></i>
                    </button>
                </div>

                <h1>${priceWT}</h1>
                <button 
                    onClick={() => onDelete(id)}
                    className='icon'>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>


        </div>

    </div>
  )
}
