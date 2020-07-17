import React from 'react';

import HomeImage from '../../components/home-image/home-image';
import Directory from '../../components/directory/directory';
import CustomMessage from '../../components/message/message';

import { StyledHome } from './home.styles';
import Newsletter from '../../components/newsletter/newsletter';

const Home = () => (
  <StyledHome>
    <HomeImage />
    <CustomMessage />
    <Directory />
    <Newsletter />
  </StyledHome>
);

export default Home;
