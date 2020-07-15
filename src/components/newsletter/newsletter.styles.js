import styled from 'styled-components';
import seed from '../../media/seed.jpg';

export const NewsLetterContainer = styled.div`
  background: url(${seed}) no-repeat center;
  background-size: cover;

  margin: 2rem auto;
  height: 25rem;
  display: flex;
  align-items: center;
`;

export const NewsLetterContent = styled.div`
  display: flex;
  margin: auto;

  h1 {
    max-width: 45rem;
    color: #fff;
    padding: 0.5rem;
    margin: 1rem 5rem;
  }
`;

export const NewsLetterForm = styled.div`
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  width: 100%;

  input {
    height: 3rem;
    width: 70%;
    padding: 0 1rem;
    margin: 1rem 0;
    font-size: 1.2rem;
    background: rgb(249, 249, 249, 0.2);
    opacity: 1;
    color: green;
    border: none;
    outline: none;
    border-radius: 4px;

    &::placeholder {
      font-size: 1rem;
      color: #fff;
      opacity: 0.5;
    }
  }
`;
