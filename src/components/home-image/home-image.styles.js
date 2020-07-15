import styled from 'styled-components';

export const HomeImageContainer = styled.div`
  .slider {
    width: 100vw;
    text-align: center;
    overflow: hidden;

    a {
      color: green;
      font-size: 1rem;
    }
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
    background: black;
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: silver;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 100vw;
    height: 100vh;
    margin-right: 5px;
    border-radius: 10px;
    background: #eee;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .slides > div:target {
    transform: scale(0.8);
  }
  .author-info {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.75rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
  }
  .author-info a {
    color: white;
  }
  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .slider > a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
  }
  .slider > a:active {
    top: 1px;
  }
  .slider > a:focus {
    background: #000;
  }
`;

export const HomeImageContent = styled.div`
  padding: 20px;
`;

export const HomeImageText = styled.div`
  position: absolute;
  min-height: 100px;
  color: #fff;
  margin: 20px;
  padding: 10px 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: start;

  h1 {
    font-size: 2rem;
  }

  span {
    color: green;
    font-size: 3rem;
    text-shadow: 2px 2px #fff;
  }

  p {
    font-size: 1rem;
    line-height: 1.3rem;
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
`;
