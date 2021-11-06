import React from 'react';
import Logo from './Logo';
import Toggle from './Toggle';
import styled from 'styled-components';
import { Container } from '../../styles/Global.Styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <Logo />
          <Toggle />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.header.color};
  box-shadow: ${(props) => props.theme.header.boxShadow};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;
