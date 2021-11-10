import React from 'react';
import styled from 'styled-components';

const Country = ({ country }) => {
  return (
    <>
      <ListItem>
        <ItemWrapper>
          <FlagWrapper>
            <img src={country.flag} alt={`${country.name} Flag`} />
          </FlagWrapper>
          <InfoWrapper>
            <h2>{country.name}</h2>
            <Details>
              <p>
                Population: <span>{country.population}</span>{' '}
              </p>
              <p>
                Region: <span> {country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </Details>
          </InfoWrapper>
        </ItemWrapper>
      </ListItem>
    </>
  );
};

export default Country;

const ListItem = styled.div`
  height: 336px;
  width: 264px;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
`;

const ItemWrapper = styled.div`
  display: block;
`;

const FlagWrapper = styled.div`
  width: 264px;
  height: 160px;
  overflow: ;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  padding: 24px;

  h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    span {
      font-weight: 300;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
