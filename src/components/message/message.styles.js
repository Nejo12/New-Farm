import styled from 'styled-components';

export const MessageContainer = styled.div`
  margin: 5rem;

  @media screen and (max-width: 900px) {
    margin: 1rem;
    text-align: center;
  }
`;

export const MessageTitle = styled.p`
  font-family: 'Patrick Hand', cursive;
  font-size: 10vmin;
  text-align: center;
  margin-bottom: 0rem !important;
`;

export const MessageInfo = styled.p`
  font-size: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  width: 70%;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
