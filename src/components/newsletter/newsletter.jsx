import React from 'react';
import CustomButton from '../custom-button/custom-button';
import {
  NewsLetterContainer,
  NewsLetterContent,
  NewsLetterForm,
  NewsLetterInput
} from './newsletter.styles';

const Newsletter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetterContent>
        <p>Sign up for updates and more through our Weekly Newsletter</p>
        <NewsLetterForm>
          <NewsLetterInput type='email' placeholder='Enter your email address' />
          <CustomButton text='Submit' />
        </NewsLetterForm>
      </NewsLetterContent>
    </NewsLetterContainer>
  );
};

export default Newsletter;
