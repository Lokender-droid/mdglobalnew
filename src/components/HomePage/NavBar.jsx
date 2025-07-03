import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/Logo/Mdglobal_main.png";
import "./NavBar.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "https://mdglobalhr.com/blog/" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact-us" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Nav */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="nav-container">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={img} alt="MD Global" className="h-10 md:h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="MainNavElement">
                  <Link to={item.href} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="quote-button">
              <Link to="/download-brochure">
                <button className="download-brochure">Download Brochure</button>
              </Link>
            </div>
          </div>

          {/* Hamburger Icon (Mobile and Tablet) */}
          <div className="hamburger md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#bd8706] hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden">
            <div className="menu-items">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="navElement"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mobile-quote-button">
              <Link to="/download-brochure">
                <button className="Download-brochure-sm">Download Brochure</button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content behind navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default NavBar;