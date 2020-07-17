import React from 'react';
import { MessageContainer, MessageTitle, MessageInfo } from './message.styles';

const CustomMessage = () => {
  return (
    <MessageContainer>
      <MessageTitle>100% Fresh. 100% Local. </MessageTitle>
      <MessageInfo>
        Your food should not travel too far to get to you fresh. With The Farm,
        you can have every fresh produce grown close to you. Nutritious produce
        from all around the world, right there close to you while it still
        alive.
      </MessageInfo>
    </MessageContainer>
  );
};

export default CustomMessage;
