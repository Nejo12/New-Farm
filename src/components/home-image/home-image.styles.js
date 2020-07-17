import styled from 'styled-components';

export const HomeImageContainer = styled.div`
  /* border: 9px solid yellow; */
  /* width: 100%; */

  .slider {
    text-align: center;
    overflow: hidden;
    /* border: 9px solid pink; */
  }

  .slides {
    /* border: 9px solid green; */

    /* width: 100vw; */
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: #333;
  }
  .slides::-webkit-scrollbar-track {
    background: silver;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100%;
    height: 99vh;
    margin-right: 5px;
    /* border-radius: 10px; */
    background: rgba(0, 0, 0, 0.7);
    transform-origin: center center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const HomeImageText = styled.div`
  position: absolute;
  min-height: 10rem;
  min-width: 90vmin;
  color: #fff;
  margin: 20px;
  padding: 10px 30px;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: start;

  h1 {
    font-size: 2rem;
  }

  span {
    color: green;
    font-size: 5vmin;
    text-shadow: 2px 2px #fff;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }

  @media screen and (max-width: 900px) {
    min-height: 20px;
    bottom: 20px;
    padding: 10px;

    span {
      color: lightgreen;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
