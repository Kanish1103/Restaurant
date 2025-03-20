import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({ category }) => {
    const { exploreMenu } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes our resturant</h2>
            <div className="food-display-list">
                {exploreMenu.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            img={item.img}
                        />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
