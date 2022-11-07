import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import joes from '../../media/joe-farm.jpg';
import sam from '../../media/sam.jpg';
import seed from '../../media/seed.jpg';
import fe from '../../media/fe.jpg';

import { HomeImageContainer, HomeImageText, HomeTitle, HomeSubTitle } from './home-image.styles';

const HomeImage = ({ currentUser }) => {
  return (
    <HomeImageContainer>
      <div className='slider'>
        <div className='slides'>
          <div id='slide-1'>
            <img src='https://i.ibb.co/WpX3Vzc/windmill.jpg' alt='img1' />
            <div className='overlay'>
              <HomeImageText>
                <HomeTitle>
                  { currentUser?.displayName ? `Hey ${currentUser?.displayName.split(' ')[ 1 ]}, welcome back ` : `Welcome ` }
                  to the <span>Farm</span>
                </HomeTitle>
                <HomeSubTitle>
                  With an ever increasing demand for fresh produce, we supply the
                  best and freshest farm produce around the world.{ ' ' }
                </HomeSubTitle>
              </HomeImageText>
            </div>
          </div>
          <div id='slide-2'>
            <img src={ joes } alt='img2' />

            <div className='overlay'>
              <HomeImageText>
                <HomeTitle>
                  We help build the <span>Farm</span>
                </HomeTitle>
                <HomeSubTitle>
                  We are obliged to build farm for individual, public and
                  private organisations. Customer satisfaction is our main goal.
                </HomeSubTitle>
              </HomeImageText>
            </div>
          </div>
          <div id='slide-3'>
            <img src={ sam } alt='sams-img' />

            <div className='overlay'>
              <HomeImageText>
                <HomeTitle>
                  Compliments given to the <span>Farm</span>
                </HomeTitle>
                <HomeSubTitle>
                  The smile of on our customer is all we need to keep us going.
                  Five years on it and our ratings on worldwide rating is still
                  5 stars.
                </HomeSubTitle>
              </HomeImageText>
            </div>
          </div>
          <div id='slide-4'>
            <img src={ seed } alt='seed-img' />

            <div className='overlay'>
              <HomeImageText>
                <HomeTitle>
                  One at a time on the <span>Farm</span>
                </HomeTitle>
                <HomeSubTitle>
                  Believe it or not, we take special care of every seeds &
                  plants. We believe the special care is important for the love
                  and care to be appreciated.
                </HomeSubTitle>
              </HomeImageText>
            </div>
          </div>
          <div id='slide-5'>
            <img src={ fe } alt='fe-img' />
            <div className='overlay'>
              <HomeImageText>
                <HomeTitle>
                  Customer support from the <span>Farm</span>
                </HomeTitle>
                <HomeSubTitle>
                  Our experienced Field Engineers are always ready to assist.
                  Both on the field and off the field.
                </HomeSubTitle>
              </HomeImageText>
            </div>
          </div>
        </div>
      </div>
      <div style={ { textAlign: 'center' } }>
        <a href='#slide-1'>
          <span className='dot'></span>
        </a>
        <a href='#slide-2'>
          <span className='dot'></span>
        </a>
        <a href='#slide-3'>
          <span className='dot'></span>
        </a>
        <a href='#slide-4'>
          <span className='dot'></span>
        </a>
        <a href='#slide-5'>
          <span className='dot'></span>
        </a>
      </div>
    </HomeImageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(HomeImage);
