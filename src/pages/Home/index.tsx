import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Link } from 'react-router-dom';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';

export const Home: React.FC = () => {
return (
<div className="home">

  <PageTitle 
  img={imgBanner} 
  imgAlt="Home banner" 
  // imgSet=""
  >
    <h1 className="align-self-center">
      OSmOSE<br />
      <span>Underwater passive acoustics for ocean observation</span>
    </h1>
  </PageTitle>

  <div className="container-fluid grid">

    <div className="card m-3 p-2 overflow-hidden posLeft">
      <img 
      className="card-img-top" 
      alt="Capture d'&eacute;cran du projet." 
      title="Cliquez pour voir le projet."
      loading="lazy" 
      src={imgBanner}
      // srcSet= 
      />
      <div className="card-img-overlay pb-1 d-flex overlay justify-content-center">
        <h2 className="card-title text-white align-self-center">Présentation</h2>
        <Link to="./project" className="stretched-link" title="Voir le projet."></Link>
      </div>
    </div>

    <div className="card m-3 p-2 overflow-hidden posLeft">
      <img 
      className="card-img-top" 
      alt="Capture d'&eacute;cran du projet." 
      title="Click to explore datas."
      loading="lazy" 
      src={imgBanner}
      // srcSet= 
      />
      <div className="card-img-overlay pb-1 d-flex overlay justify-content-center">
        <h2 className="card-title text-white align-self-center">Explorateur</h2>
        <Link to="./porte_folio/PHP_Algo/" className="stretched-link" title="Voir le projet."></Link>
      </div>
    </div>

  </div>
</div>
  );
}