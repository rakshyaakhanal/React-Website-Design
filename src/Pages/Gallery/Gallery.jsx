import React from 'react';
import Header from '../../Components/Header/Header';
import HeaderImage from '../../Images/header_bg_3.jpg';
import './Gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../Images/gallery${i}.jpg`))

  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, fugit.
      </Header>

      <section className='gallery'>
        <div className='container gallery_container'>
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery;