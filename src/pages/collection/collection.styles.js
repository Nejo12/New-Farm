import styled from 'styled-components';

export const CollectionContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const CollectionTitleStyles = styled.h2`
    font-size: 28px;
    font-weight: 100;
    margin: 25px auto 0px;
    text-align: center;
    color: green;
    padding: 5px 10px;
`;

export const CollectionItemsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    margin-left: -20px;
  }
`;
