import React from 'react';
import './footer.css';
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="text1">
        Travelling Via Delhi <br />
        Dehradun or Chandigarh?
      </div>
      <div className="text2">
      Rent while you transit <br />
      & save even more!
      </div>
      <div className="text3">
        <div className="discount">
          <p className="discount-text">Save upto</p>
          <span className="number">20%</span>
        </div>
        <div>
          <button className='btn'>know more</button>
        </div>
      </div>
    </div>
  );
}
