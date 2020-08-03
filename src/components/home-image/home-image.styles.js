import styled from 'styled-components';

export const HomeImageContainer = styled.div`
  .slider {
    text-align: center;
    overflow: hidden;
  }

  .slides {
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

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  .dot {
    cursor: pointer;
    height: 0.3rem;
    width: 1.5rem;
    margin: 0 1rem;
    border-radius: 4px;
    background-color: green;
    display: inline-block;
    position: relative;
    bottom: 4rem;
    z-index: 2;
  }
`;

export const HomeImageText = styled.div`
  position: absolute;
  min-height: 10rem;
  min-width: 90vmin;
  color: #fff;
  margin: 20px;
  padding: 10px 30px;
  top: 60%;
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
    margin: auto;
    padding: 10px;
    h1 {
      font-size: 1.5rem;
    }

    span {
      color: lightgreen;
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
