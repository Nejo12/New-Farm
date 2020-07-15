import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  height: 15rem;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;

  @keyframes blink {
    50% {
      color: transparent;
    }
  }
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
`;

export const FooterContact = styled.div`
  margin: auto;
  text-align: start;
  font-size: 0.7rem;
`;

export const FooterFollowUs = styled.div`
  margin: auto;
  letter-spacing: 0.3em;
  text-align: center;

  img {
    padding: 0.5rem;
  }
`;

export const FooterName = styled.div`
  margin: auto;
  text-align: end;
  font-size: 12px;
`;
