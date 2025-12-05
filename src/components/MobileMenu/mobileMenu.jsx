import React, {useEffect} from "react";
import "./mobileMenu.css"
import logo from "./logo.png";


function MobileMenu({ isOpen }) {


  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}  >
      <div className="menu-content">
        <div className="top">
          <div className="left-top">
            <i class="fa-solid fa-user"></i>
            <span className="text">Welcome!</span>
          </div>
          <div className="right-top">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </div>
        <div className="menu-links">
          <ul>
            <li>
              <a href="">
                <i class="fa-solid fa-coins"></i>
                <span href="">SuperCoin Zone</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-plus"></i>
                <span href="">Flipkart Plus Zone</span>
              </a>
            </li>
            <div className="border-line"></div>
            <li>
              <a href="">
                 <i class="fa-solid fa-bars"></i>
                <span href="">All Categories</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <span href="">More on Flipkart</span>
              </a>
            </li>
            <div className="border-line"></div>
            <li>
              <a href="">
                <i class="fa-solid fa-globe"></i>
                <span href="">Choose Language</span>
              </a>
            </li>
            <div className="border-line"></div>
            <li>
              <a href="">
                <i class="fa-solid fa-tag"></i>
                <span href="">Offer Zone</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-store"></i>
                <span href="">Sell on Flipkart</span>
              </a>
            </li>
            <div className="border-line"></div>
            <li>
              <a href="">
                <i class="fa-solid fa-box"></i>
                <span href="">My Orders</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-ticket-simple"></i>
                <span href="">Coupons</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-shopping-cart"></i>
                <span href="">My Cart</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-regular fa-heart"></i>
                <span href="">My Wishlist</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-solid fa-user"></i>
                <span href="">My Account</span>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-regular fa-bell"></i>
                <span href="">My Notifications</span>
              </a>
            </li>
            <div className="border-line"></div>
            <li>
              <a href="">
                <span>Notification Preferences</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Notification Preferences</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Help Centre</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Legal</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
