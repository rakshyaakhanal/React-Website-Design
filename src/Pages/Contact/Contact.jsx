import React from 'react';
import Header from '../../Components/Header/Header';
import HeaderImage from '../../Images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eum illo vel velit esse pariatur doloremque. Repudiandae
        impedit iusto maxime inventore!
      </Header>

      <section className='contact'>
        <div className='container contact-container'>
          <div className='contact-wrapper'>
            <a href='mailto:support@rakshyaa.com' target='_blank' rel='noreferrer noopener'>
              <MdEmail />
            </a>

            <a href='https://messenger.com' target='_blank' rel='noreferrer noopener'>
              <BsMessenger />
            </a>

            <a href='https://whatsapp .com' target='_blank' rel='noreferrer noopener'>
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;