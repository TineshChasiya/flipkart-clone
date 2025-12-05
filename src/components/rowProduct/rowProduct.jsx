import React from 'react'
import "./rowProduct.css"
import ASUS_monitor from "./ASUS_monitor.png"
import LED_TV from "./LED_TV.png"
import speaker from "./mike.png"
import monitors from "./Monitors.png"
import printer_2 from "./Printer_2.png"
import printer from "./Printer.jpeg"
import watch from "./Watch.png"
import Projector from "./projector.jpeg"



function Rowproduct() {
  return (
    <div className="row_product_container">
      <h5 className='row_product_heading'>Top Deals</h5>
      <div className="row_product_item_container">
        <div className="row_product_item">
          <div>
            <img src={ASUS_monitor} alt="ASUS_monitor" />
          </div>
          <div className="name_price">
            <span className="name">ASUS Monitors</span>
            <span className="price">From &#8377;6599</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={LED_TV} alt="LED_TV" />
          </div>
          <div className="name_price">
            <span className="name">LED_TV</span>
            <span className="price">From &#8377;10000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={speaker} alt="Speaker" />
          </div>
          <div className="name_price">
            <span className="name">Speaker</span>
            <span className="price">From &#8377;15000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={monitors} alt="Monitors" />
          </div>
          <div className="name_price">
            <span className="name">Monitors</span>
            <span className="price">From &#8377;20000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={printer} alt="Printer" />
          </div>
          <div className="name_price">
            <span className="name">Printer</span>
            <span className="price">From &#8377;25000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={printer_2} alt="Printer" />
          </div>
          <div className="name_price">
            <span className="name">Printer</span>
            <span className="price">From &#8377;25000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={Projector} alt="Projector" />
          </div>
          <div className="name_price">
            <span className="name">Projector</span>
            <span className="price">From &#8377;40000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
        <div className="row_product_item">
          <div>
            <img src={watch} alt="Watch" />
          </div>
          <div className="name_price">
            <span className="name">Watch</span>
            <span className="price">From &#8377;5000</span>
          </div>
          <a href="" className="more_click">
            <i class="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Rowproduct;