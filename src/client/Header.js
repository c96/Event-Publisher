import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/EventPublish'>Event Publisher</Link></li>
        <li><Link to='/Dashboard'>Dashboard</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
