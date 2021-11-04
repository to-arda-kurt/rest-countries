import React from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import styled from 'styled-components';

const Toggle = () => {
  return (
    <>
      <ToggleButton>
        <HiOutlineMoon />
        <p>Dark Mode</p>
      </ToggleButton>
    </>
  );
};

export default Toggle;

const ToggleButton = styled.div`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  gap: 8px;

  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;
