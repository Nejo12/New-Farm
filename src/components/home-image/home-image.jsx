import React from 'react';
import joes from '../../media/joe-farm.jpg';
import sam from '../../media/sam.jpg';
import seed from '../../media/seed.jpg';
import fe from '../../media/fe.jpg';

import { HomeImageContainer, HomeImageText } from './home-image.styles';

const HomeImage = () => (
  <HomeImageContainer>
    <div className='slider'>
      <div className='slides'>
        <div id='slide-1'>
          <img src='https://i.ibb.co/WpX3Vzc/windmill.jpg' alt='img1' />
          <HomeImageText>
            <h1>
              Welcome to the <span>Farm</span>
            </h1>
            <p>
              With an ever incresing demand for fresh produce, we supply the
              best and freshest farm produce around the world.{' '}
            </p>
          </HomeImageText>
        </div>
        <div id='slide-2'>
          <img src={joes} alt='img2' />
          <HomeImageText>
            <h1>
              We help build the <span>Farm</span>
            </h1>
            <p>
              We tend to build farm for individual, public and private
              organisations. Satisfaction is our main goal.
            </p>
          </HomeImageText>
        </div>
        <div id='slide-3'>
          <img src={sam} alt='sams-img' />
          <HomeImageText>
            <h1>
              Compliments given to the <span>Farm</span>
            </h1>
            <p>
              The smile of on our customer is all we need to keep us going. Five
              years on it and our ratings on worldwide rating is still 5 stars.
            </p>
          </HomeImageText>
        </div>
        <div id='slide-4'>
          <img src={seed} alt='seed-img' />
          <HomeImageText>
            <h1>
              One at a time on the <span>Farm</span>
            </h1>
            <p>
              Believe it or not, we take special care on every seed / plant We
              believe the special care is important for the love and care to be
              appreciated.
            </p>
          </HomeImageText>
        </div>
        <div id='slide-5'>
          <img src={fe} alt='fe-img' />
          <HomeImageText>
            <h1>
              Customer support from the <span>Farm</span>
            </h1>
            <p>
              Our experieinced Field Engineers are always ready to assist. Both
              on the field and off the field.
            </p>
          </HomeImageText>
        </div>
      </div>
    </div>
  </HomeImageContainer>
);

export default HomeImage;
