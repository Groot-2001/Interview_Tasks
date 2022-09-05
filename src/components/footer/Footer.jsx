import React from 'react';
import './footer.css';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faGrid} from '@fortawesome/sharp-solid-svg-icons';
import {faCreditCard,faSearch,faUserGroup,faUser} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <>
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
    <div className="bottom-navbar">
      <div className="categories">
        <div className="icon">
        <FontAwesomeIcon icon={faGrid} />
        </div>
        <div className="span">
          Categories
        </div>
      </div>
      <div className="Offers">
        <div className="icon">
          <FontAwesomeIcon icon={faCreditCard}/>
        </div>
        <div className="span">
          Offers
        </div>
      </div>
      <div className="Search">
        <div className="icon">
          <FontAwesomeIcon icon={faSearch}/>
        </div>
        <div className="span">
          Search
        </div>
      </div>
      <div className="Refer-Earn">
        <div className="icon">
          <FontAwesomeIcon icon={faUserGroup}/>
        </div>
        <div className="span">
          Refer & Earn
        </div>
      </div>
      <div className="Sign-up">
        <div className="icon">
          <FontAwesomeIcon icon={faUser}/>
        </div>
        <div className="span">
          Sign up
        </div>
      </div>
    </div>
    </>
  );
}
