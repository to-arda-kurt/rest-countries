import React from 'react';
import styled from 'styled-components';

const Country = ({ country }) => {
  return (
    <>
      <ListItem>
        {country.name}
        <ItemWrapper>
          <div>img</div>
          <InfoWrapper>
            <h2>{country.name}</h2>
            <h3>Population:{country.population}</h3>
            <h3>Region:{country.region}</h3>
            <h3>Capital:{country.capital}</h3>
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
  background: #ffffff;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  cursor: pointer;
`;

const ItemWrapper = styled.div`
  display: block;
`;

const InfoWrapper = styled.div``;
