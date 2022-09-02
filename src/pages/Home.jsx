import React from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/footer/Footer';
import Topbar from '../components/topbar/Topbar';
import './home.css';

export default function Home() {
  return (
    <div className='Home'>
      <Topbar/>
      <div id='heading'>
        <h1>Trekking Gear on rent</h1>
      </div>
      <Card/>
      <Footer/>
    </div>
  );
}
