import React from 'react';
import CustomButton from '../custom-button/custom-button';
import {
  NewsLetterContainer,
  NewsLetterContent,
  NewsLetterForm,
} from './newsletter.styles';

const Newsletter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <h1>Sign up for updates and more through our Weekly Newsletter</h1>
        <NewsLetterForm>
          <input type='email' placeholder='Enter your email address' />
          <CustomButton text='Submit' />
        </NewsLetterForm>
      </NewsLetterContent>
    </NewsLetterContainer>
  );
};

export default Newsletter;
