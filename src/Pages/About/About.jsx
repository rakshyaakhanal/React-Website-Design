import React from 'react';
import Header from '../../Components/Header/Header';
import HeaderImage from '../../Images/header_bg_1.jpg';
import StoryImage from '../../Images/about1.jpg';
import VisionImage from '../../Images/about2.jpg';
import MissionImage from '../../Images/about3.jpg';
import './About.css';

const About = () => {
  return (
    <>
      <Header title='About Us' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis minus
        placeat impedit nemo esse libero est, in adipisci assumenda beatae.
      </Header>

      <section className='about-story'>
        <div className='container about-story-container'>
          <div className='about-section-image'>
            <img src={StoryImage} alt='Our Story Image' />
          </div>

          <div className='about-section-content'>
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque,
              minima tempore aspernatur unde quo hic voluptas totam, et, ab cum maxime
              aliquam quas suscipit officiis? Omnis, itaque quisquam? Accusantium culpa
              itaque maiores voluptatibus qui omnis et quam facilis quod?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
              magni minima labore magnam nemo, sint enim, at ea culpa sunt eius quis
              perspiciatis odit laboriosam hic tenetur quidem blanditiis non!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel
              expedita reiciendis ut quas distinctio? Eos odit ratione illo natus?
            </p>
          </div>
        </div>
      </section>

      <section className='about-vision'>
        <div className='container about-vision-container'>
          <div className='about-section-content'>
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore
              cupiditate debitis et quae incidunt, deserunt ab. Voluptatibus assumenda
              p erspiciatis maiores consectetur similique modi beatae. Vel ad facere maiores
              id est atque reiciendis a, veritatis nesciunt aliquid dolor expedita. Nemo
              possimus doloremque minus? Laboriosam sapiente quo dicta cupiditate, vitae voluptates!
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque,
              minima tempore aspernatur unde quo hic voluptas totam, et, ab cum maxime
              aliquam quas suscipit officiis? Omnis, itaque quisquam? Accusantium culpa
              itaque maiores voluptatibus qui omnis et quam facilis quod?
            </p>
          </div>

          <div className='about-section-image'>
            <img src={VisionImage} alt='Our Vision Image' />
          </div>
        </div>
      </section>

      <section className='about-mission'>
        <div className='container about-mission-container'>
          <div className='about-section-image'>
            <img src={MissionImage} alt='Our Story Image' />
          </div>

          <div className='about-section-content'>
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque,
              minima tempore aspernatur unde quo hic voluptas totam, et, ab cum maxime
              aliquam quas suscipit officiis? Omnis, itaque quisquam? Accusantium culpa
              itaque maiores voluptatibus qui omnis et quam facilis quod?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
              magni minima labore magnam nemo, sint enim, at ea culpa sunt eius quis
              perspiciatis odit laboriosam hic tenetur quidem blanditiis non!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque vel
              expedita reiciendis ut quas distinctio? Eos odit ratione illo natus?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;