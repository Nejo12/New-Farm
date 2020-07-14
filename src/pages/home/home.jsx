import React from 'react';

import HomeImage from '../../components/home-image/home-image';
import Directory from '../../components/directory/directory';
import Message from '../../components/message/message';

import { StyledHome } from './home.styles';

const Home = () => (
  <StyledHome>
    <HomeImage />
    <Message />
    <Directory />
  </StyledHome>
);

export default Home;
