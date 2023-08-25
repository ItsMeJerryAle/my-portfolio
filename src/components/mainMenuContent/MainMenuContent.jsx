import React from 'react'
import './menucontent.css';
import { FaLinkedin, FaGithub, FaWhatsapp, FaGoogle } from 'react-icons/fa'


const MainMenuContent = () => {
  return (
    <div className='notification-popup slide-bottom'>
        <div className="notif-container">
          <h4>Contact Details</h4>
          <div className='icons'>
              <a href="linkedin.com"><FaGithub /></a>
              <a href="linkedin.com"><FaLinkedin /></a>
              <a href="linkedin.com"><FaGoogle /></a>
              <a href="linkedin.com"><FaWhatsapp /></a>
          </div>
        </div>
    </div>
  )
}

export default MainMenuContent