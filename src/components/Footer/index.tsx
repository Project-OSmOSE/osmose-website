import React from 'react';

import './styles.css';
import ifremer from '../../images/ifremer_logo_blanc_902_845.webp';
// import imgBanner from '../../images/maxresdefault.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-around align-items-center">
        {/* <img src={logo} alt="OSmOSE logo"/> */}
        <img src={ifremer} alt="Ifremer logo"/>

        <p>
          Contact : <br />
          <a href="mailto:dorian.cazau@ensta-bretagne.fr" title="Contact OSmOSE"> dorian.cazau@ensta-bretagne.fr</a>
        </p>
        <p>
          OSmOSE <a href="/humans.txt" title="Full credits"> credits</a>, <br /> GPL-3.0, 2021
        </p>
        <p>
          <a href="https://github.com/Project-ODE">GitHub</a>
        </p>
    </footer>
  );
}
