import styled from 'styled-components';

export const CollectionPreviewContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 400px) {
    margin-left: -20px;
  }
`;

export const CollectionPreviewTitleStyles = styled.h1`
  font-size: 28px;
  font-weight: 100;
  margin: 25px auto 0;
  cursor: pointer;
  text-align: center;
  color: green;
  padding: 5px 10px;
  /* border: 1px solid red; */

  &:hover {
      :before {content:"VIEW MORE "}
  }
`;

export const CollectionPreviewStyles = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
