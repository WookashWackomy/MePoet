import React from 'react';

import {Link} from 'react-router-dom';
import logo from '../../../public/assets/img/logo.png';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

    <nav className="navbar navbar-dark bg-dark-green" style={{marginBottom: "20px"}}>
      <Link to="/" className="navbar-brand navbar-left mb-0 h1" style={{color: "white", width: "100%"}}><img
        src={logo} alt={"logo"}/></Link>
    </nav>

    <hr/>
  </header>
);

export default Header;
