import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>    
        <div className='first-col'>
            <h1 className='company-name'>QEstate Homes</h1>
            <div className='company-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className='second-col'>
            <h1 className='link-header'>
                Contact
            </h1>
            <ul className='link-items'>
                <li>Bengaluru, India</li>
                <li>qestate@gmail.com</li>
                <li>+91 873686287364</li>
                <li>021897349823</li>
            </ul>
        </div>
    </div>
  )
}
