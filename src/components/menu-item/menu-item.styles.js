import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: rgba(249, 249, 249, 0.8);
  width: 100%;
  height: 500px;
  overflow: hidden;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column !important;
    padding-bottom: 2rem;
  }

  .background-image {
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`;

export const MenuItemContent = styled.div`
  padding: 10% 0;
  width: 50%;
  text-align: center;
  height: 100%;

  button {
    margin: 0 auto;
  }

  @media screen and (max-width: 720px) {
    width: 100%;

    button {
      margin: 1rem auto;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 20px 10px;
    min-width: 40%;
    height: 300px;
  }
`;

export const MenuItemTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 1rem;
  font-size: 24px;
  color: green;
`;
