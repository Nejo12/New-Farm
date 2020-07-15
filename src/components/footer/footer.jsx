import React from 'react';

import {
  FooterContainer,
  FooterContact,
  FooterFollowUs,
  FooterName,
} from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterContact>
      <p>About Us</p>
      <p>Contact</p>
      <p>Privacy</p>
      <p>Advertising</p>
      <p>Pricing</p>
    </FooterContact>
    <FooterFollowUs>
      <h3>FOLLOW US</h3>
      <div className='social'>
        <img
          src='https://img.icons8.com/color/48/000000/facebook-circled.png'
          alt='mediaIcon'
        />
        <img
          src='https://img.icons8.com/color/48/000000/instagram-new.png'
          alt='mediaIcon'
        />
        <img
          src='https://img.icons8.com/color/48/000000/linkedin-circled.png'
          alt='mediaIcon'
        />
        <img
          src='https://img.icons8.com/color/48/000000/whatsapp.png'
          alt='mediaIcon'
        />
        <img
          src='https://img.icons8.com/color/48/000000/pinterest--v1.png'
          alt='mediaIcon'
        />
      </div>
    </FooterFollowUs>
    <FooterName>
      <a
        href='https://gox.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        &copy; The Farm, Gabriel Olaniyi 2020 {'  '}
        <span className='loader__dot'>.</span>
        {'  '}
        <span className='loader__dot'>.</span>
        {'  '}
        <span className='loader__dot'>.</span>
      </a>
    </FooterName>
  </FooterContainer>
);

export default Footer;
