import './header.css';

import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="hdr01Container">
      <div className="groww-container flex-end">
        <Link to="/">
          <span className="hdr01Logo">Growwgram</span>
        </Link>
        <div>Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
