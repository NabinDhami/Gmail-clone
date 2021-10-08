import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import gmail from '../images/gmail.png';

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
      }}
    >
      <div
        className="header_left"
        style={{ display: 'flex', marginLeft: '20px' }}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/* https://i02.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg */}
        <img
          src={gmail}
          alt=" gmailIcon"
          style={{ height: '50px', margin: '10px' }}
        />
        <h1 style={{ color: 'grey', marginTop: '10px', fontWeight: '400' }}>
          Gmail
        </h1>
      </div>

      <div className="header_middle">
        <h1>Middle header</h1>
      </div>

      <div className="header_right">
        <h1>Right Header</h1>
      </div>
    </div>
  );
};

export default Header;
