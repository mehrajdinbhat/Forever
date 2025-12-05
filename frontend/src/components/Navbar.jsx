import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between py-4 px-4 md:px-10 font-medium">
      {/* Logo */}
      <img
        src={assets.logo}
        className="w-28 md:w-36 object-contain"
        alt="logo"
      />

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Search */}
        <img
          src={assets.search_icon}
          className="w-5 md:w-6 cursor-pointer"
          alt=""
        />

        {/* Profile (Desktop Only) */}
        <div className="group relative hidden md:block">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded shadow">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart (Visible on mobile also) */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 md:w-6" alt="" />
          <p className="absolute -right-2 -top-2 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px]">
            10
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-sm text-gray-700 absolute left-1/2 transform -translate-x-1/2">
        <NavLink to="/" className="hover:text-black">
          HOME
        </NavLink>
        <NavLink to="/collection" className="hover:text-black">
          COLLECTION
        </NavLink>
        <NavLink to="/about" className="hover:text-black">
          ABOUT
        </NavLink>
        <NavLink to="/contact" className="hover:text-black">
          CONTACT
        </NavLink>
      </ul>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-xl font-bold mb-5"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-4 text-gray-700 text-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/collection" onClick={() => setMenuOpen(false)}>
            COLLECTION
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </NavLink>

          <hr className="my-3" />

          <Link
            to="/cart"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img src={assets.cart_icon} className="w-5" alt="" /> Cart (10)
          </Link>

          <Link className="flex items-center gap-3">
            <img src={assets.profile_icon} className="w-5" alt="" /> My Profile
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
