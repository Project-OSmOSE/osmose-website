import React from 'react';

import './styles.css';
import ifremer from '../../images/logo_ifremer_blanc_267_250.webp';
// import imgBanner from '../../images/maxresdefault.jpg';

export const Footer: React.FC = () => {
  return (
<footer className="footer d-flex flex-wrap flex-column flex-md-row justify-content-around align-items-center">
    {/* <img src={logo} alt="OSmOSE logo"/> */}
    <p className="m-3">
      Powered by <br/>
      <img src={ifremer} alt="Ifremer logo"/>
    </p>

    <p className="m-3">
      Contact : <br />
      <a href="mailto:dorian.cazau@ensta-bretagne.fr" title="Contact OSmOSE"> dorian.cazau@ensta-bretagne.fr</a>
    </p>
    <p className="m-3">
      OSmOSE <a href="/humans.txt" title="Full credits"> credits</a>, <br /> GPL-3.0, 2021
    </p>
    <p className="m-3">
      <a href="https://github.com/Project-ODE">GitHub</a>
    </p>
</footer>
  );
}
