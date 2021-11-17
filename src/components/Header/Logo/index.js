import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <LogoText to="/">Where in the world?</LogoText>
    </>
  );
};

export default Logo;

const LogoText = styled(Link)`
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  text-decoration: none;

  @media screen and (max-width: 376px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
