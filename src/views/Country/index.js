import React, { useContext, useEffect } from 'react';
import MainContext from '../../context/mainContext';
import { useHistory, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const Country = () => {
  const mainContext = useContext(MainContext);
  const {
    getCountry,
    country,
    loading,
    setLoading,
    getAllCountries,
    countries,
  } = mainContext;

  const history = useHistory();
  const code = history.location.pathname.split('/')[1];

  useEffect(() => {
    setLoading(true);
    getCountry(code);
    getAllCountries();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const countryBorders = (border) => {
    try {
      let fullName = null;
      fullName = countries.filter((country) => country.alpha3Code === border);
      return (
        <LinkButton key={border} to={`/${border.toLowerCase()}`}>
          {fullName[0].name}
        </LinkButton>
      );
    } catch (error) {
      console.log(error);
    }
  };

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
                  <Title>Sub Region: </Title>{' '}
                  {country.subRegion ? country.subRegion : 'N/A'}
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
            <Borders>
              <InfoItemDiv>
                <TittleWrapper>
                  <Title>Border Countries: </Title>
                </TittleWrapper>
                <div>
                  {country.borders &&
                    country.borders.map((border) => countryBorders(border))}
                </div>
              </InfoItemDiv>
            </Borders>
          </CountryInfo>
        </MainCountryInfo>
      )}
    </Section>
  );
};

export default withRouter(Country);

const InfoItemDiv = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TittleWrapper = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
`;
const LinkButton = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  margin-right: 10px;
  color: ${(props) => props.theme.text};
  padding: 2px 27px;
  background: ${(props) => props.theme.elements};
  box-shadow: ${(props) => props.theme.borderShadow};
  border-radius: 2px;
  display: inline-table;
  clear: none;
`;

const Borders = styled.div`
  margin-top: 68px;
`;
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

  @media screen and (max-width: 660px) {
    flex-direction: column;
  }
`;

const CountryInfo = styled.div`
  width: 574px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

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
  height: 100%;
  flex-shrink: 0;

  @media screen and (max-width: 660px) {
    width: 320px;
    height: 100%;
  }

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const MainCountryInfo = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media screen and (max-width: 660px) {
    margin-bottom: 40px;
  }

  span {
    margin-left: 22px;
    margin-right: 10px;
  }
`;

const Section = styled.section`
  max-width: 1280px;
  margin: 80px auto;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 660px) {
    margin: 31px 28px;
  }
`;
