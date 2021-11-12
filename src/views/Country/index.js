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
        <MainCountryInfo>
          <Flag>
            <img src={country.flag} alt={`${country.name} Flag`} />
          </Flag>
          <CountryInfo>
            <h1>{country.name}</h1>
            <Infos>
              <div>
                <InfoItem>
                  <Title>Native Name: </Title> {country.nativeName}
                </InfoItem>
                <InfoItem>
                  <Title>Population: </Title> {country.population}
                </InfoItem>
                <InfoItem>
                  <Title>Region: </Title> {country.region}
                </InfoItem>
                <InfoItem>
                  <Title>Sub Region: </Title> {country.subRegion}
                </InfoItem>
                <InfoItem>
                  <Title>Capital: </Title> {country.capital}
                </InfoItem>
              </div>
              <div>
                <InfoItem>
                  <Title>Top Level Domain: </Title>
                  {country.topLevelDomain}
                </InfoItem>
                <InfoItem>
                  <Title>Currencies: </Title>{' '}
                  {country.currencies &&
                    country.currencies.map(({ code, name }, index) => {
                      return (
                        <span key={code}>
                          {name}{' '}
                          {index < country.currencies.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                </InfoItem>
                <InfoItem>
                  <Title>Languages: </Title>
                  {country.languages &&
                    country.languages.map(({ iso639_1, name }, index) => {
                      return (
                        <span key={iso639_1}>
                          {name}
                          {index < country.languages.length - 1 ? ', ' : ''}
                        </span>
                      );
                    })}
                </InfoItem>
              </div>
            </Infos>
            <div>
              <InfoItem>
                <Title>Border Countries:</Title>
              </InfoItem>
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </CountryInfo>
        </MainCountryInfo>
      )}
    </Section>
  );
};

export default Country;

const Title = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
`;

const InfoItem = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CountryInfo = styled.div`
  width: 574px;

  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 23px;
    margin-top: 29px;
  }
`;

const Flag = styled.div`
  overflow: hidden;
  width: 560px;
  height: 401px;

  img {
    border-radius: 10px;
    width: 100%;
    object-fit: contain;
  }
`;

const MainCountryInfo = styled.main`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
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

const Section = styled.section`
  max-width: 1280px;
  margin: 80px auto;
  color: ${(props) => props.theme.text};
`;