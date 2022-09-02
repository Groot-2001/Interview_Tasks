import React from 'react';
import "./topbar.css";
import logo from '../../assets/img/sharepal logo.png';
import trekking from '../../assets/img/trekking.png';
import bike from '../../assets/img/bike.png';
import camera from '../../assets/img/camera.png';
import ogcamera from '../../assets/img/ogcamera.png';
import psp from '../../assets/img/psp.png';
import disc from '../../assets/img/disc.png';
import thumbsup from '../../assets/img/thumbsup.png';
import gift from '../../assets/img/gift.png';
import payment from '../../assets/img/payment.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown,faAngleDown} from'@fortawesome/free-solid-svg-icons';

export default function Topbar() {
  return (
   <div className="topbar-container">
     <div className='topbar'>
      <div className="logo">
        <img src={logo} alt="broken image" className='img' />
      </div>
      <div className="content">
        <span className='content-text'>Bangalore</span>
        <FontAwesomeIcon icon={faAngleDown} className="caret"/>
      </div>
      <div className="group-elements">
          <div className="icons">
            <img src={trekking} alt="" />
            <span>Trekking</span>
          </div>
          <div className="icons">
          <img src={bike} alt="" />
            <span>Riding</span>
          </div>
          <div className="icons">
          <img src={camera} alt="" />
            <span>GoPro</span>
          </div>
          <div className="icons">
          <img src={ogcamera} alt="" />
            <span>DSLR</span>
          </div>
          <div className="icons">
          <img src={psp} alt="" />
            <span>PS4/Xbox</span>
          </div>
          <div className="icons">
          <img src={disc} alt="" />
            <span>Games</span>
          </div>
      </div>
      <div className="auth">
        <div className="cart-logo">
          <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
        <div className="login-btn">
          <button className='btn'><span className='login-text'>Login/Signup</span></button>
        </div>
      </div>
    </div>
    <div className="motive">
      <div className="motive1">
        <img src={thumbsup} alt="broken image" />
        <span className="motive-text">Excellent Quality <br /> Products</span>
      </div>
      <div className="motive2">
        <img src={gift} alt="broken image" />
        <span className="motive-text">Delivery Date & Return <br /> Date is FREE!!</span>
      </div>
      <div className="motive3">
        <img src={payment} alt="broken image" />
        <span className="motive-text">Pay on Delivery</span>
      </div>
    </div>
   </div>
  );
}
