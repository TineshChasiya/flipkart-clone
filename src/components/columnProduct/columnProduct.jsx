import React from 'react'
import "./columnProduct.css"
import monitors from "./monitors.png"
import Tv from "./Tv.png"
import laptop from "./laptop.jpeg"
import android_mobile from "./android_mobile.jpeg"
import jackets from "./jackets.png"
import kidsApparelCombos from "./kidsApparelCombos.png"
import laptopbags from "./laptopBags.png"
import monitors2 from "./monitors.png"
import shoes from "./shoes.png"
import socks from "./socks.png"
import suitcases from "./suitcases.jpeg"
import sweaters from "./sweaters.png"
import tracksuits from "./tracksuits.png"



function ColumnProduct() {
    return (
        <div className="columnProduct">
            <div className="columnProductContainer">
                <div className="top">
                    <a href='#' className="title">Electronics Deals</a>
                    <a href="#" className="more"><i class="fa-solid fa-angle-right"></i></a>
                </div>
                <div className="columnProductItemContainer">
                    <div className="columnProductItem">
                        <a href="#"><img src={monitors} alt="Monitor" /></a>
                        <div className="description">
                            <span className="productName">Monitor</span>
                            <a href="#" className="offer">Best Selling</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={Tv} alt="TV" /></a>
                        <div className="description">
                            <span className="productName">TV</span>
                            <a href="#" className="offer">Discount Offer</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={laptop} alt="Laptop" /></a>
                        <div className="description">
                            <span className="productName">Laptop</span>
                            <a href="#" className="offer">50% off</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={android_mobile} alt="Android Mobile" /></a>
                        <div className="description">
                            <span className="productName">Android Mobile</span>
                            <a href="#" className="offer">Top rated</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columnProductContainer">
                <div className="top">
                    <a href='#' className="title">Winter Essentials for You</a>
                    <a href="#" className="more"><i class="fa-solid fa-angle-right"></i></a>
                </div>
                <div className="columnProductItemContainer">
                    <div className="columnProductItem">
                        <a href="#"><img src={socks} alt="Socks" /></a>
                        <div className="description">
                            <span className="productName">Men's and Women's Socks</span>
                            <a href="#" className="offer">Special Offer</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={sweaters} alt="Sweaters" /></a>
                        <div className="description">
                            <span className="productName">Men's Sweaters</span>
                            <a href="#" className="offer">Top Sellers</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={tracksuits} alt="Tracksuits" /></a>
                        <div className="description">
                            <span className="productName">Men's Tracksuits</span>
                            <a href="#" className="offer">Min. 50% off</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={jackets} alt="Jackets" /></a>
                        <div className="description">
                            <span className="productName">Men's Jackets</span>
                            <a href="#" className="offer">Most Loved</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columnProductContainer">
                <div className="top">
                    <a href='#' className="title">Fashion Top Deals</a>
                    <a href="#" className="more"><i class="fa-solid fa-angle-right"></i></a>
                </div>
                <div className="columnProductItemContainer">
                    <div className="columnProductItem">
                        <a href="#"><img src={shoes} alt="Shoes" /></a>
                        <div className="description">
                            <span className="productName">Men's Top Shoes</span>
                            <a href="#" className="offer">Min. 70% Off</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={laptopbags} alt="Laptopbags" /></a>
                        <div className="description">
                            <span className="productName">Laptop Bags</span>
                            <a href="#" className="offer">Min. 70% Off</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={suitcases} alt="Suitcases" /></a>
                        <div className="description">
                            <span className="productName">Suitcases</span>
                            <a href="#" className="offer">Min. 70% Off</a>
                        </div>
                    </div>
                    <div className="columnProductItem">
                        <a href="#"><img src={kidsApparelCombos} alt="kids Apparel Combos" /></a>
                        <div className="description">
                            <span className="productName">Kids Apparel Combos</span>
                            <a href="#" className="offer">Min. 50% Off</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ColumnProduct