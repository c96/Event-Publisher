import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/logo-via-logohub.png';


const Header = () => (
  <header>
    <img src={Logo} alt="Eventmonkey Logo"/>;
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
