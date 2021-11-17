import React, { useContext, useEffect } from 'react';
import Country from './Country';
import styled from 'styled-components';

import MainContext from '../../context/mainContext';

const Countries = () => {
  const mainContext = useContext(MainContext);

  const { getAllCountries, result } = mainContext;

  useEffect(() => {
    getAllCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [result]);

  return (
    <Section>
      <CountryList>
        {result.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </CountryList>
    </Section>
  );
};

export default Countries;

const Section = styled.section`
  max-width: 1280px;
  margin: 48px auto;

  @media screen and (max-width: 660px) {
    margin: 32px auto;
  }
`;

const CountryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 74px;

  @media screen and (max-width: 1280px) {
    justify-content: center;
  }
  a {
    text-decoration: none;
  }
`;
