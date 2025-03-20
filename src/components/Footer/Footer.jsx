import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo-bw.png'
import { Instagram, Linkedin, Github } from 'lucide-react';
const Footer = () => {
    return (
        <div className='footer' id='Contact-Us'>
            <div className="footer-content">
                <div className='footer-content-left'>
                    <img className='logo' src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis debitis aspernatur adipisci eius accusamus quos sequi magni quae. Quasi impedit laborum dignissimos sed sequi nam consequatur voluptatum hic error cupiditate?</p>
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/k_a_n_i_s_h_0_2_3/" target='new'> <Instagram className='insta icon' /></a>
                        <a href="https://www.linkedin.com/in/kanish-p-694050253/" target='new'> <Linkedin className='linkedin icon' /></a>
                        <a href="https://github.com/Kanish1103" target='new'>  <Github className='github icon' /></a>

                    </div>
                </div>
                <div className='footer-content-center'>
                    <h1>COMPANY</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 6369427772</li>
                        <li>contact@foodieshub.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2025 Foodieshub.com -All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer
