import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext)

    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = totalCartAmount > 200 ? 0 : 49;


    return (
        <form className='place-order'>
            <div className='place-order-left'>
                <p className='title'>
                    Delivery Information
                </p>
                <div className='multi-fields'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className='multi-fields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className='multi-fields'>
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
            <div className='place-order-right'>
                <div className='cart-total'>
                    <h2>Cart Total</h2>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                        <p>Rs. {totalCartAmount}</p>
                    </div>
                    <hr />
                    <div className='cart-total-details'>
                        <p>Delivery Fee</p>
                        <p>Rs. {deliveryFee}</p>
                    </div>
                    <hr />
                    <div className='cart-total-details'>
                        <b>Total</b>
                        <b>Rs. {totalCartAmount + deliveryFee}</b>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
