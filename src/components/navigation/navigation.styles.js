import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NaviContainer = styled.div`
  background-color: #333; /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  transition: top 0.5s; /* Transition effect when sliding down (and up) */
  z-index: 99;
`;

export const StyledNaviContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  color: greenyellow;

  img {
    width: 40px;
  }

  .capitalize {
    text-transform: capitalize;
  }

  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  padding-top: 10px;
  margin-right: 20px;
  margin-left: 50px;

  @media screen and (max-width: 450px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 320px) {
    margin-right: unset;
  }
`;

export const BrandLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 15px 50px;

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    font-size: 10px;
  }
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: green;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    color: greenyellow;
  }
`;
