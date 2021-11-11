import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../../context/mainContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const Country = () => {
  const mainContext = useContext(MainContext);
  const { getCountry, country, loading, setLoading } = mainContext;

  const history = useHistory();
  const code = history.location.pathname.split('/')[1];

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    setLoading(true);
    getCountry(code);
    setLoading(false);
  }, []);

  return (
    <Section>
      <Back onClick={goBack}>
        <span>
          <BiArrowBack size={20} />
        </span>
        Back
      </Back>
      {loading === true ? (
        ''
      ) : (
        <main>
          <div>
            <img src={country.flag} alt={`${country.name} Flag`} />
          </div>
          <div></div>
        </main>
      )}
    </Section>
  );
};

export default Country;

const Section = styled.section`
  max-width: 1280px;
  margin: 80px auto;
  color: ${(props) => props.theme.text};
`;

const Back = styled.button`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  width: 136px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-bottom: 80px;
  span {
    margin-left: 22px;
    margin-right: 10px;
  }
`;
