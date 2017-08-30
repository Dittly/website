import React from 'react';

import searchIcon from '../static/search.svg';
import Input from './Input';

const image = {
  src: searchIcon,
  alt: 'magifying glass',
};


const searchStyles = {
  backgroundColor: 'white',
  borderBottom: '1px solid #EDEDED',
  padding: '4px',
  fontFamily: 'Rubik',
  color: '#9B9B9B',
  fontSize: '14px',
  maxWidth: '375px',
  display: 'flex',
};

const Search = () => (
  <div style={searchStyles}>
    <img src={image.src} alt={image.alt} />
    <Input placeholder={'Search'}/>
  </div>
);

export default Search
