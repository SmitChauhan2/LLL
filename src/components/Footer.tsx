import React from 'react'
import footerlogo from '../assets/footerlogo.png';
export const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 flex justify-between items-center">
      <div className="ml-4">
        <img src={footerlogo} alt="Logo" className="h-10 w-100" />
      </div>
      <div className="flex-grow text-center">Copyright © 2024 Laugh Logic Labs</div>
    </footer>
  )
}
