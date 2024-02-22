import React from 'react';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Programs from '../../Components/Programs/Programs';
import Values from '../../Components/Values/Values';
import FAQs from '../../Components/FAQs/FAQs';
import Testimonials from '../../Components/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <>
        <MainHeader />
        <Programs />
        <Values />
        <FAQs />
        <Testimonials />
      </>
    </div>
  )
}

export default Home;


