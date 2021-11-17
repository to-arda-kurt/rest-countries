import React, { useContext, useState } from 'react';
import MainContext from '../../context/mainContext';
import styled from 'styled-components';

import { BiSearchAlt2, BiChevronDown } from 'react-icons/bi';

const SearchFilter = () => {
  const mainContext = useContext(MainContext);
  const { filterOptions, setFilter, searchCountry } = mainContext;
  const [showOptions, setShowOptions] = useState(false);

  const [search, setSearch] = useState('');

  const filterHandler = () => {
    setShowOptions((prevState) => {
      return !prevState;
    });
  };

  const filterSelectHandler = (option) => {
    setFilter(option);
  };

  const searchFilter = (value) => {
    setSearch(value);
    searchCountry(value);
  };

  return (
    <>
      <Section>
        <Form>
          <BiSearchAlt2 size={18} />
          <form action="">
            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => searchFilter(e.target.value)}
            />
          </form>
        </Form>

        <FilterButton onClick={filterHandler}>
          Filter by Region
          <span>
            <BiChevronDown size={24} />
          </span>
          {showOptions && (
            <FilterOptions>
              <ul>
                {filterOptions.map((option) => (
                  <li
                    onClick={() => filterSelectHandler(option)}
                    key={option}
                    value={option}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </FilterOptions>
          )}
        </FilterButton>
      </Section>
    </>
  );
};

export default SearchFilter;

const FilterOptions = styled.div`
  position: absolute;
  top: 60px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 5px;
  width: 200px;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.text};
  @media screen and (max-width: 660px) {
    top: 55px;
  }

  ul {
    list-style: none;
    padding: 16px 24px;

    li {
      text-align: left;
      padding: 4px 0;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
    }
  }
`;

const FilterButton = styled.button`
  position: relative;
  width: 200px;
  height: 56px;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    height: 48px;
  }
`;

const Section = styled.section`
  max-width: 1280px;
  margin: 48px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    margin: 0 16px;
    margin-top: 24px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: 1280px) {
    margin: 0 16px;
    margin-top: 24px;
  }
`;

const Form = styled.div`
  width: 450px;
  height: 56px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 660px) {
    width: 343px;
    height: 48px;
    margin-bottom: 40px;
  }

  form {
    input {
      border: 0;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      height: 100%;
      background: transparent;
      color: ${(props) => props.theme.input};
    }
  }

  svg {
    margin: 18px 24px 18px 32px;

    path {
      fill: ${(props) => props.theme.input};
    }
  }
`;
