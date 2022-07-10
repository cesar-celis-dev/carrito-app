import React from 'react';
import {pictures} from "../helpers/Images";


export const Product = ({
    id,
    name,
    description,
    priceWT,
    Add,
    Sub,
    Delete
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
                        onClick={Sub}
                    >  <i className="fa-solid fa-minus"></i>
                    </button> 
                </div>

                <h1 className='text-center'>{}</h1> 

                <div className='btnProduct'>
                    <button
                        className='icon'
                        onClick={() => Add(id)}                 
                    >  <i className="fa-solid fa-plus"></i>
                    </button>
                </div>

                <h1>${priceWT}</h1>
                <button 
                    onClick={Delete}
                    className='icon'>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>


        </div>

    </div>
  )
}
