import React from 'react';
import { currencyFormatted } from '../helpers/currencyFormatted';

export const Total = ({ticket}) => {

  return (
    <div>
        <div className='totaldiv'>
            <div className='totalesTextDiv'>
                <div className='totalText'>Subtotal</div>
                <div className='totalText'>Shipping fees</div>
                <div className='totalText'>Taxes</div>
                <div className='totalText bold'>Total (Including tax)</div>
            </div>
            <div className='subtotales'>
                <div className='value'>${currencyFormatted(ticket.subtotal)}</div>
                <div className='value'>${currencyFormatted(ticket.shipping)}</div>
                <div className='value'>${currencyFormatted(ticket.taxes)}</div>
                <div className='bold'>${currencyFormatted(ticket.total)}</div>
            </div>
        </div>
    </div>
  )
}
