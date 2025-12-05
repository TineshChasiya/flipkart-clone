import React, { useState, useEffect } from 'react';
import "./header.css"
import { MdStore } from "react-icons/md";
import MobileMenu from '../MobileMenu/mobileMenu';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
  if(menuOpen){
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
}, [menuOpen]);


    return (
        <>
            <header className="navbar">
                <div className="logo_search_account">
                    <div className="logo">
                        <i 
                          onClick={() => setMenuOpen(true)} 
                          className="fa-solid fa-bars bar_icon"
                        ></i>
                        <span className="logo_name">FlipKart</span>
                    </div>

                    <div className="search">
                        <input type="search" placeholder='Search for Products, Brands and More' />
                        <i className="fa-solid fa-magnifying-glass search_icon"></i>
                    </div>

                    <div className="account">
                        <i className="fa-solid fa-user user_icon"></i>
                        <span className="text">Account</span>
                        <i className="fa-solid fa-chevron-down down_icon"></i>
                    </div>
                </div>

                <div className="cart_seller_dot">
                    <div className="cart">
                        <i className="fa-solid fa-shopping-cart cart_icon"></i>
                        <span className="cart_text">Cart</span>
                    </div>

                    <div className="seller">
                        <MdStore className="sellerIcon seller_icon" />
                        <span className="cart_text"> Become a Seller</span>
                    </div>
                </div>
            </header>
             
            {menuOpen && (
                <div className="overlay" onClick={() => setMenuOpen(false)}></div>
            )}

            <MobileMenu
                isOpen={menuOpen}
                closeMenu={() => setMenuOpen(false)}
            />

            <div className="mobile-search">
                <input type="search" className="mobile-search-input" placeholder='Search for Products' />
                <i className="fa-solid fa-magnifying-glass search_icon" ></i>

            </div>
        </>
    )
}

export default Header;
