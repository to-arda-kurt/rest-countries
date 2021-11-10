import React from 'react';
import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import Countries from '../../components/Countries';

const Home = () => {
  return (
    <>
      <Header />
      <SearchFilter />
      <Countries />
    </>
  );
};

export default Home;
