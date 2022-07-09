import React from 'react'

export const Total = () => {
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
                <h1>$0</h1>
                <h1>$0</h1>
                <h1>$0</h1>
                <h1 className='bold'>$0</h1>
            </div>
        </div>
    </div>
  )
}
