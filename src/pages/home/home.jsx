import React from 'react';

import HomeImage from '../../components/home-image/home-image';
import Directory from '../../components/directory/directory';
import CustomMessage from '../../components/message/message';

import { StyledHome } from './home.styles';
import Newsletter from '../../components/newsletter/newsletter';

const Home = () => (
  <StyledHome>
    <HomeImage />
    <CustomMessage title="100% Fresh. 100% Local." info='Your food should not travel too far to get to you fresh. With The Farm,
        you can have every fresh produce grown close to you. Nutritious produce
        from all around the world, right there close to you while it still
        alive.' />
    <Directory />
    <Newsletter />
  </StyledHome>
)

export default Home;
