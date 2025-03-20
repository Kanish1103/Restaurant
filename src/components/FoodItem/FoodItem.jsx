import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, img }) => {

    // const [itemCount, setItemCount] = useState(0)

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={img} alt="image" />
            </div>
            <div className='food-item-info'>
                <div className='food-item-name'>
                    <p>{name}</p>
                </div>
                <p className='food-item-desc'>
                    {description ? description.slice(0, 50) : "null"}
                </p>
                <div className='food-item-price'>
                    Rs.{price}
                    {/* <button>Add</button> */}
                    {!cartItems[id]
                        ? <button onClick={() => addToCart(id)}>Add</button>
                        : <div className='food-item-counter quantity-controls'>
                            <button className='btn' onClick={() => removeFromCart(id)}>-</button>
                            <p>{cartItems[id]}</p>
                            <button className='btn' onClick={() => addToCart(id)}>+</button>
                        </div>
                    }

                    {/* {
                        !itemCount
                            ? <button onClick={() => setItemCount(prev => prev + 1)}>Add</button>
                            : <div className='food-item-counter'>
                                <button className='btn' onClick={() => setItemCount(prev => prev - 1)}>-</button>
                                <p>{itemCount}</p>
                                <button className='btn' onClick={() => setItemCount(prev => prev + 1)}>+</button>
                            </div>
                    } */}
                </div>
            </div>
        </div>
    )
}

export default FoodItem
