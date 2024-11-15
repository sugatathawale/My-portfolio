import React from 'react'
import './Footer.css'
import footer_logo from "@/assets/sugatlogog.png"
// import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img id='log' src={footer_logo} alt="" />
            <p>I am a frontend developer from Mumbai Maharashtra</p>
        </div>
        {/* <div className="footer-top-right">
            { <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div> }
            { <div className="footer-subscribe">Subscribe</div> }
        </div> */}
      </div>
      <hr />
      <div className="footer-bottom">
        {/* <p className="footer-bottom-left">© 2023 Alex Bennett. All rights reserved.</p> */}
        {/* <div className="footer-bottom-right">
            <p>linkeden</p>
            <p>GitHub</p>
            <p>Connect with me</p>
        </div> */}
        <div className="footer-bottom-right">
              <a href="https://www.linkedin.com/in/sugat-athawale-870a51247/" target="_blank">
          <p id='para'>LinkedIn</p>
              </a>
              <a href="https://github.com/sugatathawale">
              <p id='para'>GitHub</p>
            </a>
            <a href="mailto:athawalesugat17@example.com">
         <p id='para'>Connect with me</p>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
