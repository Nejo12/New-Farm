import React from 'react';
import { Link } from 'react-router-dom';

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
        <img src='https://img.icons8.com/color/48/000000/facebook-circled.png' />
        <img src='https://img.icons8.com/color/48/000000/instagram-new.png' />
        <img src='https://img.icons8.com/color/48/000000/linkedin-circled.png' />
        <img src='https://img.icons8.com/color/48/000000/whatsapp.png' />
        <img src='https://img.icons8.com/color/48/000000/pinterest--v1.png' />
      </div>
    </FooterFollowUs>
    <FooterName>
      <a target='_blank' href='https://gox.netlify.app/'>
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
