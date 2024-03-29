import styled from 'styled-components';

export const CartItemStyles = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  background: #333;
`;

export const CartItemImageStyles = styled.img`
  width: 30%;
  height: 60px;
  border-radius: 4px;
  border: 1px solid greenyellow;
`;

export const CartItemDetailsStyles = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  color: #fff;
`;
