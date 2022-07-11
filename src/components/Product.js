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
                    <img src={pictures[id-1]} alt={name} />
                </div>
                <div className='information'>
                    <div className='text-title'>{name}</div>
                    <div className='textTenue'>{description}</div>
                </div>
            </div>


            <div className='operation'>
                <div className='btnProduct'>
                    <button
                        className='iconOp'
                        onClick={() => onSub(id)}
                    >  <i className="fa-solid fa-minus"></i>
                    </button> 
                </div>

                <div className='value'>{value}</div> 

                <div className='btnProduct'>
                    <button
                        className='iconOp'
                        onClick={() => onAdd(id)}                 
                    >  <i className="fa-solid fa-plus"></i>
                    </button>
                </div>

                <div className='value'>${priceWT}</div>
                <button 
                    onClick={() => onDelete(id)}
                    className='iconDelete'>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>


        </div>

    </div>
  )
}
