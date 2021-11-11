import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/mainContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const Country = () => {
  const mainContext = useContext(MainContext);
  const { getCountry, country } = mainContext;

  const history = useHistory();
  const code = history.location.pathname.split('/')[1];

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    getCountry(code);
  }, []);

  return (
    <Section>
      <button onClick={goBack}>
        <span>
          <BiArrowBack />
        </span>
        Back
      </button>

      <main>
        <div>
          <img src={country.flag} alt={`${country.name} Flag`} />
        </div>
        <div></div>
      </main>
    </Section>
  );
};

export default Country;

const Section = styled.section`
  max-width: 1280px;
  margin: 80px auto;
  color: ${(props) => props.theme.text};
`;
