import React from 'react'
import '../styles/checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>

        <div className='checkout-container'>

            <div><h3>Checkout</h3></div>

            <form>
                <input type={'number'} name='cardnumber' placeholder='Card Number' />
                <input type={'number'} name='cardnumber' placeholder='Exp Date' />
                <input type={'number'} name='cardnumber' placeholder='CVV/CVV2' />
                <input type={'number'} name='cardnumber' placeholder='Card Pin' />
                <button type='submit'>MAKE PAYMENT</button>
            </form>

        </div>

    </div>
  )
}

export default Checkout