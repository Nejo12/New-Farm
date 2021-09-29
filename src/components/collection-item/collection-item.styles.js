import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CollectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 450px;
  margin: 5px;
  padding: 0.5rem;
  border: 1px solid silver;
  border-radius: 4px;
  background: #deeadf;

  @media screen and (max-width: 900px) {
    width: 40vw;
  }

  @media screen and (max-width: 520px) {
    width: 80vw;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  margin-top: 5rem;
  border-radius: 4px;

  @media screen and (max-width: 1380px) {
    display: flex;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 55%;
  border-radius: 4px 4px 0 0;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  margin-right: 15px;
`;
