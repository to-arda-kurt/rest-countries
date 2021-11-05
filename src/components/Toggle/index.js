import React, { useContext } from 'react';
import MainContext from '../../context/mainContext';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Toggle = () => {
  const mainContext = useContext(MainContext);
  const { theme, setTheme } = mainContext;

  const toggleHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ToggleButton onClick={toggleHandler}>
        {theme === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
        {theme === 'light' ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </ToggleButton>
    </>
  );
};

export default Toggle;

//TODO: Framer Motion
const ToggleButton = styled(motion.div)`
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;

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
