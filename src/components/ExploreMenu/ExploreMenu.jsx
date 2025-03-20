import React, { useState, useEffect } from 'react'
import './ExploreMenu.css'

const ExploreMenu = ({ category, setCategory }) => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/MenuList.json')
            .then(response => response.json())
            .then(data => setMenu(data))
            .catch(error => console.error('Error fetching menu:', error))
    }, []);

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">
                Explore our diverse range of categories designed to inspire and inform. From the latest trends to timeless classics, there's something for everyone. Uncover exclusive deals and hidden gems tailored just for you!
            </p>
            <div className='explore-menu-list'>
                {menu.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory(prev => prev === item.menu_name
                                ? "All" : item.menu_name)}
                            key={index}
                            className='explore-menu-list-item'>
                            <img
                                className={category === item.menu_name ? "active" : ""}
                                src={item.menu_image}
                                alt={item.menu_name}
                            />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
