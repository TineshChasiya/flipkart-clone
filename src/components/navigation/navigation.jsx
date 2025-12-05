import React from 'react';
import "./navigation.css";
import minutes_10 from "./images/10_minutes.png";
import clothes from "./images/clothes.png";
import flight_booking from "./images/flight_booking.png";
import home from "./images/home.png";
import phones from "./images/phones.png";
import appliences from "./images/appliences.jpg";
import grocery from "./images/grocery.png";


function Navigation() {
  return (
    <nav className="category_nav">
        <ul>
            <li>
                <a href="">
                    <img src={minutes_10} alt="10_minutes" />
                    <span>10 Minutes</span>
                </a>
            </li>
            <li className='clothes'>
                <a href="">
                    <img src={clothes} alt="Clothes" style={{width: "64px"}} />
                    <span className='clothes_text'>
                        Clothes <i className="fa-solid fa-angle-down clothes_icon"></i>
                    </span>
                </a>
                
                {/* MEGA MENU moved outside <a> */}
                <div className="mega_menu">
                    <div className="column">
                        <a href="">
                            <span>Men's Top Wear</span>
                            <i className="fa-solid fa-angle-right mega_menu_left_icon"></i>
                        </a>
                        <a href="">
                            <span>Men's Bottom Wear</span>
                            <i className="fa-solid fa-angle-right mega_menu_left_icon left_icon"></i>
                        </a>
                        <a href="">
                            <span>Women Ethnic</span>
                            <i className="fa-solid fa-angle-right mega_menu_left_icon left_icon"></i>
                        </a>
                        <a href="">
                            <span>Men's Footwear</span>
                            <i className="fa-solid fa-angle-right mega_menu_left_icon left_icon"></i>
                        </a>
                        <a href="">
                            <span>Women's Footwear</span>
                            <i className="fa-solid fa-angle-right mega_menu_left_icon left_icon"></i>
                        </a>
                    </div>
                    <div className="column">
                        <div className='heading'>More in Men's Top Wear</div>
                        <a href="">All</a>
                        <a href="">Men's T-shirts</a>
                        <a href="">Men's Casual Shirts</a>
                        <a href="">Men's Formal Shirts</a>
                        <a href="">Men's Kurtas</a>
                    </div>
                </div>
            </li>
            <li>
                <a href="">
                    <img src={flight_booking} alt="Flight booking" />
                    <span>Flight booking</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src={home} alt="Home" />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="">
                    <img src={phones} alt="Phones" />
                    <span>Phones</span>
                </a>
            </li>
             <li>
                <a href="">
                    <img src={grocery} alt="Grocery" />
                    <span>Grocery</span>
                </a>
            </li>
             <li>
                <a href="">
                    <img src={appliences} alt="appliences" />
                    <span>Appliences</span>
                </a>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navigation;
