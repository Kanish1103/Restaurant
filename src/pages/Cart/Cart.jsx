import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, exploreMenu, removeFromCart, getTotalCartAmount, increaseQuantity, decreaseQuantity } = useContext(StoreContext);

    const navigate = useNavigate();

    const totalCartAmount = getTotalCartAmount();
    const deliveryFee = totalCartAmount > 200 ? 0 : 49;

    return (
        <div>
            <div className="cart">
                <div className='cart-items'>
                    <div className='cart-items-title'>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {exploreMenu.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return (
                                <div key={item.id}>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={item.img} alt="" />
                                        <p>{item.name}</p>
                                        <p>Rs. {item.price}</p>
                                        <div className='quantity-controls'>
                                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                            <p>{cartItems[item.id]}</p>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>
                                        <p>Rs. {item.price * cartItems[item.id]}</p>
                                        <p onClick={() => removeFromCart(item.id)} className='remove'>X</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="cart-bottom">
                    <div className='cart-total'>
                        <h2>Cart Total</h2>
                        <div>
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
                        </div>
                        <button onClick={() => navigate('/order')} >PROCEED TO CHECKOUT </button>
                    </div>
                    <div className='cart-promocode'>
                        <p>If you have a promo code, enter it here</p>
                        <div className='promo-code-input'>
                            <input type="text" placeholder='Promo code' name="" id="" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
