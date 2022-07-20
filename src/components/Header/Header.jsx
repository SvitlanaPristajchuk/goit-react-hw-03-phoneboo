import React from 'react';
import s from './Header.module.css'; 
import PropTypes from 'prop-types';

const Header = ({title}) => {
   return (
          <h1 className={s.title}>{title}</h1>
        );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;