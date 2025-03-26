import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("Home")

    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className='navbar'>
            {/* <div className="logo">FOODIES</div> */}
            <Link to='/Foodies'>  <img src={logo} alt="LOGO" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/Foodies' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
                {/* <a href='#home' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a> */}

                <Link to='/menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</Link>
                {/* <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a> */}

                {/* <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a> */}
                <a href='#Contact-Us' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <IoSearch size={22} color="gray" className='search-icon' />
                <div className='navbar-search'>
                    <Link to='/cart'>  <IoCartSharp size={22} color="gray" className='cart' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)} >Sign in</button>
            </div>
        </div>
    )
}

export default Navbar