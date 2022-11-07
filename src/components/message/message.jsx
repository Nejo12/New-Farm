import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { MessageContainer, MessageTitle, MessageInfo } from './message.styles';

const CustomMessage = (props) => {
  return (
    <MessageContainer>
      <MessageTitle>{ props.title }</MessageTitle>
      <MessageInfo>
        { props.info }
      </MessageInfo>
    </MessageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(CustomMessage);
