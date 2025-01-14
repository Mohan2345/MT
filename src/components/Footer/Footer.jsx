import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube Icon" />
        <img src={twitter_icon} alt="Twitter Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
        <img src={facebook_icon} alt="FaceBook Icon" />
      </div>
      <ul>
        <li href="#">FAQ</li>
        <li href="#">Investor Relations</li>
        <li href="#">Privacy</li>
        <li href="#">Speed Test</li>
        <li href="#">Help Centre</li>
        <li href="#">Jobs</li>
        <li href="#">Legal Notices</li>
        <li href="#">Account</li>
        <li href="#">Ways to Watch</li>
        <li href="#">Corporate Information</li>
        <li href="#">Only on Netflix</li>
        <li href="#">Media Centre</li>
        <li href="#">Terms of Use</li>
        <li href="#">Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
