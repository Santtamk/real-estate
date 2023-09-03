import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";


export default function Header({ onPage }) {
    const navigate = useNavigate();

  return (
    <div className='header'>
        <div className='logo' onClick={() =>navigate("/")}>QEstate</div>
        {
            onPage === 'home' ? (
                <div className='nav-link' onClick={() =>navigate("/listings")}>
                    <span>Explore</span>
                </div>
            ) : (
                <div className='nav-link' onClick={() =>navigate("/")}>
                    <span>Featured Listings</span>
                </div>
            )
        }
    </div>
  )
}   
