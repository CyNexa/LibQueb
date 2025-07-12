// src/components/header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-white pt-[.5vh] sticky top-0 shadow-xl">
      <div className="flex items-center justify-between bg-secondary px-4 h-[6.5vh] relative z-20">
        <span><Link to="/" className="font-mont">LOREM IPSUM LIBRARY</Link></span>

        {/* Hamburger Button */}
        <button
          className="sm:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-10 font-mont text-sm">
          <Link to="/">HOME</Link>
          <Link to="/notice">NOTICE</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/membership">MEMBERSHIP</Link>
        </nav>
      </div>

      {/* Mobile Nav Sliding Panel */}
      <div className={`fixed top-5 right-0 h-full w-64 bg-secondary/80 backdrop-blur-sm transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-10 sm:hidden`}>
        <div className="flex flex-col p-4 space-y-4 font-mont text-sm mt-10 text-white">
          <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/notice" className="hover:underline" onClick={() => setMenuOpen(false)}>NOTICE</Link>
          <Link to="/gallery" className="hover:underline" onClick={() => setMenuOpen(false)}>GALLERY</Link>
          <Link to="/about-us" className="hover:underline" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
          <Link to="/membership" className="hover:underline" onClick={() => setMenuOpen(false)}>MEMBERSHIP</Link>
        </div>
      </div>
      {/* <hr className="border-none h-1 bg-secondary relative z-20" /> */}
    </header>
  );
}