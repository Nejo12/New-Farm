import React from 'react';
import { MessageContainer, MessageTitle, MessageInfo } from './message.styles';

const Message = () => {
  return (
    <MessageContainer>
      <MessageTitle>100% Local </MessageTitle>
      <MessageInfo>
        Your food should not travel too far to get to you fresh. With the farm,
        you can have every fresh produce grown close to you. Nutritious produce
        from all around the world, right there close to you while it still
        lives.
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
