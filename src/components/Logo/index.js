import React from 'react';
import styled from 'styled-components';

const LogoText = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;

const Logo = () => {
  return (
    <>
      <LogoText>Where in the world?</LogoText>
    </>
  );
};

export default Logo;
