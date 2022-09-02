import React from 'react';
import './card.css';
import whatsapp from '../../assets/img/whatsapp.png';

export default function Card() {
  return (
    <>
    <div className='Card-Container'>
      <div className="card" id='one'>
        <h1 className='card-text'>Trekking <br /> Shoes</h1>
        <span className="product-count">3+ Products</span>
      </div>
      <div className="card" id='two'>
      <h1 className='card-text'>Trekking <br /> Jackets</h1>
        <span className="product-count">10+ Products</span>
      </div>
      <div className="card" id='three'>
      <h1 className='card-text'>BackPacks</h1>
        <span className="product-count">4+ Products</span>
      </div>
      <div className="card" id='four'>
      <h1 className='card-text'>Trek <br /> Accessories</h1>
        <span className="product-count">11+ Products</span>
      </div>
    </div>
     <div className="whatsapp">
     <img src={whatsapp} alt="broken url" id='icon'/>
   </div>
   </>
  );
}
