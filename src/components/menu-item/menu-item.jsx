import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemTitle,
} from './menu-item.styles';
import CustomButton from '../custom-button/custom-button';

const MenuItem = ({ title, imageUrl, info, history, match, linkUrl }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <MenuItemContent>
      <MenuItemTitle>{title} </MenuItemTitle>
      <p>{info}</p>

      <CustomButton
        text='VIEW MORE'
        callback={() => history.push(`${match.url}${linkUrl}`)}
      />
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
