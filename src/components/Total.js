import React from 'react';

export const Total = ({ticket}) => {
  const currencyFormatted= (amount)=> {
    let i = parseFloat(amount);
      if(isNaN(i)) { i = 0.00; }
    let minus = '';
      if(i < 0) { minus = '-'; }
      i = Math.abs(i);
      i = parseInt((i + .005) * 100);
      i = i / 100;
    let s = `${i}`;
      if(s.indexOf('.') < 0) { s += '.00'; }
      if(s.indexOf('.') === (s.length - 2)) { s += '0'; }
      s = minus + s;
    return s;
  }
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
                <h1>${currencyFormatted(ticket.subtotal)}</h1>
                <h1>${currencyFormatted(ticket.shipping)}</h1>
                <h1>${currencyFormatted(ticket.taxes)}</h1>
                <h1 className='bold'>${currencyFormatted(ticket.total)}</h1>
            </div>
        </div>
    </div>
  )
}
