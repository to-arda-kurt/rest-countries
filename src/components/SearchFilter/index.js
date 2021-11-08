import React, { useContext, useState, useRef, useEffect } from 'react';
import MainContext from '../../context/mainContext';
import styled from 'styled-components';

const SearchFilter = () => {
  const mainContext = useContext(MainContext);
  const { filterOptions } = mainContext;
  const [showOptions, setShowOptions] = useState(false);
  const clickOutside = useRef(null);

  const handleClick = (e) => {
    if (clickOutside.current.contains(e.target)) {
      // inside click
      return;
    }
    setShowOptions(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const filterHandler = () => {
    setShowOptions((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <Section>
        <form action="">
          <label htmlFor=""></label>
          <input type="text" />
        </form>
        <div ref={clickOutside}>
          <button onClick={filterHandler}>Filter by Region</button>
          {showOptions && (
            <div>
              <ul>
                {filterOptions.map((option) => (
                  <li key={option} value={option}>
                    {option}{' '}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default SearchFilter;

const Section = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;
