import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
    <div className="footer-content">
        <div className='footer-content-left'>
            <img src={assets.logo} alt=""/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium explicabo voluptatibus dolorem recusandae, quos dolorum eum. Minus nisi rem ad est at ipsum. Distinctio ducimus saepe cum culpa adipisci harum reiciendis est temporibus vero, sapiente accusamus placeat, doloremque ullam!</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
            </div>
        </div>
        <div className='footer-content-centre'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-456-3256</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>Copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer