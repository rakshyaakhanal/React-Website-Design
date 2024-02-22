import React from 'react';
import Header from '../../Components/Header/Header';
import HeaderImage from '../../Images/header_bg_5.jpg';
import Trainer from '../../Components/Trainer/Trainer';
import { trainers } from '../../data';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Trainers.css';

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto odit error,
        explicabo dolorum dolores exercitationem quo blanditiis totam inventore.
      </Header>

      <section className='trainers'>
        <div className='container trainers-container'>
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]
              }
              />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers;