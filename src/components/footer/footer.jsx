import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_top">
          <div className='details'>
            <h6>About</h6>
            <div className="links">
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Flipkart Stories</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Corporate Information</a></li>
              </ul>
            </div>
          </div>
          <div className='details'>
            <h6>Group Companies</h6>
            <div className="links">
              <ul>
                <li><a href="#">Myntra</a></li>
                <li><a href="#">Cleartrip</a></li>
                <li><a href="#">Shopsy</a></li>
              </ul>
            </div>
          </div>
          <div className='details'>
            <h6>Help</h6>
            <div className="links">
              <ul>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Cancellation & Returns</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className='details'>
            <h6>Consumer Policy</h6>
            <div className="links">
              <ul>
                <li><a href="#">Cancellation & Returns</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Grievance Redressal</a></li>
                <li><a href="#">EPR Compliance</a></li>
                <li><a href="#">FSSAI Food Safety Connect App</a></li>
              </ul>
            </div>
          </div>
          <div className='details right'>
            <div className="address">
              <p>
                 <h6>Mail Us:</h6>
                <p className="text">
                  FlipKart Internet Private Limited,<br />
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                Bengaluru, 560103,<br />
                Karnataka, India<br />
                </p>
              </p>
            </div>
            <div className="social">
              <h6>Social:</h6>
              <div className="social_links">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className='details'>
            <div className="RO_address">
              <h6>Registered Office Address:</h6>
              <p className='text'>
                FlipKart Internet Private Limited,<br />
                Buildings Alyssa, Begonia &<br />
                Clove Embassy Tech Village,<br />
                Outer Ring Road, Devarabeesanahalli Village,<br />
                Bengaluru, 560103,<br />
                Karnataka, India<br />
                CIN : U51109KA2012PTC066107<br />
                Telephone:<a href='#'>044-45614700 <span>/</span> 044-67415800</a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-store"></i>
                <span className="text">Become a Seller</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-bullhorn"></i>
                <span className="text">Advertise</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-gift"></i>
                <span className="text">Gift Cards</span>
              </a>
            </li>
            <li>
              <i class="fa-regular fa-copyright"></i>
              <span className="text">2007-2025 Flipkart.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer