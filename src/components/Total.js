import React from 'react';

export const Total = ({billing}) => {
  return (
    <div>
        <div className='totaldiv'>
            <div>
                <h1>Subtotal</h1>
                <h1>Shipping fees</h1>
                <h1>Taxes</h1>
                <h1 className='bold'>Total (Including tax)</h1>
            </div>
            <div>
                <h1>{billing.subtotal}</h1>
                <h1>{billing.shipping}</h1>
                <h1>{billing.taxes}</h1>
                <h1 className='bold'>{billing.total}</h1>
            </div>
        </div>
    </div>
  )
}
