import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../Images/main_header.png';
import '../../Pages/Home/Home.css';

const MainHeader = () => {
  return (
    <header className='mainHeader'>
      <div className='container mainHeader-container'>
        <div className='mainHeader-left'>
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            doloremque facere possimus laboriosam suscipit illo fugiat inventore
            cumque neque ratione.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>

        <div className='mainHeader-right'>
          <div className='mainHeader-circle'></div>
          <div className='mainHeader-image'>
            <img src={Image} alt='Main Header Image' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
