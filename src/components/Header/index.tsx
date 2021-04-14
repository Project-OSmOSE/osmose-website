import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../images/logo_seul_couleur.png';

export const Header: React.FC = () => {
return (
<header className="Navigation">
  <nav className="navbar navbar-expand-md navbar-light shadow-sm" role="navigation">
    {/* <Link className="ml-sm-4 ml-md-2 navbar-brand" to="#about">Florent B</Link> */}
    <Link className="navbar-brand logo d-flex align-items-center" to="/">
      <img src={logo} className="d-inline-block align-top" alt="" />
      <span>OSmOSE</span>
    </Link>
    <button className="navbar-toggler mx-sm-4 mr-md-2" type="button" data-toggle="collapse" data-target="#navbar1"
      aria-controls="navbarNavAltMarkup" aria-expanded="false">
       {/* data-toggle="collapse" data-target="#navbar1"  */}
      <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navbar1" className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        <li className="mx-5 mx-md-4 nav-item">
          <Link to="/" className="nav-link navigation-link">Accueil</Link>
        </li>
        <li className="mx-5 mx-md-4 nav-item">
          <Link to="/project" className="nav-link navigation-link">Projet</Link>
        </li>
        <li className="mx-5 mx-md-4 nav-item">
          <Link to="/explore" className="nav-link navigation-link">Explorer</Link>
        </li>
        <li className="mx-5 mx-md-4 nav-item">
          <Link to="/people" className="nav-link navigation-link">Equipe</Link>
        </li>
      </ul>
    </div>
  </nav>
</header>
);
}
