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
