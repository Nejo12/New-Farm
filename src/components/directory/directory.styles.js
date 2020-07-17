import styled from 'styled-components';

export const StyledDirectory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 2rem;

  @media screen and (max-width: 720px) {
    padding: 0;
  }
`;
