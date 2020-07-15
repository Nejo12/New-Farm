import React from 'react';
import { MessageContainer, MessageTitle, MessageInfo } from './message.styles';

const CustomMessage = ({ title, message }) => {
  return (
    <MessageContainer>
      <MessageTitle>{title} </MessageTitle>
      <MessageInfo>{message}</MessageInfo>
    </MessageContainer>
  );
};

export default CustomMessage;
