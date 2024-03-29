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

  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin: auto;
  }

  p {
    max-width: 45rem;
    font-size: 2rem;
    color: #fff;
    padding: 0.5rem;
    margin: 1rem 5rem;

    @media screen and (max-width: 720px) {
      text-align: center;
      margin: auto;
    }
  }
`;

export const NewsLetterForm = styled.div`
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    text-align: center;

    button {
      margin: auto;
    }
  }
`;

export const NewsLetterInput = styled.input`
  height: 3rem;
  width: 70%;
  padding: 0 1rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  background: rgb(249, 249, 249, 0.2);
  opacity: 1;
  color: lightgreen;
  border: none;
  outline: none;
  border-radius: 4px;
  
  &::placeholder {
    font-size: 1rem;
    color: #fff;
    opacity: 0.5;
  }
`;