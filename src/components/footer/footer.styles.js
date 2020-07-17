import styled from 'styled-components';

export const FooterContainer = styled.div`
  min-height: 15rem;
  display: flex;
  margin: auto;
  flex-wrap: wrap;

  .loader__dot {
    display: inline;
    animation: 1s blink infinite;
  }
  .loader__dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .loader__dot:nth-child(3) {
    animation-delay: 500ms;
  }

  @keyframes blink {
    50% {
      color: transparent;
    }
  }
`;

export const FooterContact = styled.div`
  margin: auto;
  /* text-align: center; */
  font-size: 0.7rem;
  display: flex;

  p {
    cursor: pointer;
    padding: 0 0.5rem;
  }
`;

export const FooterFollowUs = styled.div`
  margin: auto;
  letter-spacing: 0.3em;
  text-align: center;

  img {
    margin: 0.5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 720px) {
    h3 {
      display: none;
    }
  }
`;

export const FooterName = styled.div`
  margin: auto;
  font-size: 0.7rem;

  a {
    text-decoration: none;
    color: #000;
  }
`;
