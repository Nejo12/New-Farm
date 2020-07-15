import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: rgba(249, 249, 249, 0.8);

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  width: 100%;
  height: 500px;
  align-items: center;
  overflow: hidden;

  .background-image {
    width: 50%;
    height: 100%;
    background-position: center;
    background-size: cover;

    /* &:hover {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    } */
  }
`;

export const MenuItemContent = styled.div`
  width: 50%;
  text-align: center;

  button {
    margin: 0 auto;
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
  margin-bottom: 6px;
  font-size: 24px;
  color: green;
`;
