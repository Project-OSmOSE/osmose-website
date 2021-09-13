import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Link } from 'react-router-dom';

import './styles.css';

import imgProject from '../../images/illust/pexels-elianne-dipp-4666753_848.jpg';
import imgExplore from '../../images/illust/pexels-jeremy-bishop-2422915_848.jpg';

export const Home: React.FC = () => {
return (
<div className="home">

  <PageTitle 
  // img={imgBanner} 
  // imgAlt="Home banner" 
  // imgSet=""
  >
    <h1 className="align-self-center">
      OSmOSE<br />
      <span>Open Science meets Ocean Sound Explorers</span>
      {/* <span>Underwater passive acoustics for ocean observation</span> */}
    </h1>
  </PageTitle>

  <div className="container-fluid grid">

    <div className="card m-3 p-2 overflow-hidden posLeft">
      <img 
      className="card-img-top" 
      alt="Capture d'&eacute;cran du projet." 
      title="Cliquez pour voir le projet."
      loading="lazy" 
      src={imgProject}
      // srcSet= 
      />
      <div className="card-img-overlay pb-1 d-flex overlay justify-content-center">
        <h2 className="card-title text-white align-self-center">Meet</h2>
        <Link to="./project" title="Découvrez OSmOSE." className="stretched-link"></Link>
      </div>
    </div>

    <div className="card m-3 p-2 overflow-hidden posLeft">
      <img 
      className="card-img-top" 
      alt="Capture d'&eacute;cran du projet." 
      title="Click to explore datas."
      loading="lazy" 
      src={imgExplore}
      // srcSet= 
      />
      <div className="card-img-overlay pb-1 d-flex overlay justify-content-center">
        <h2 className="card-title text-white align-self-center">Explore</h2>
        <Link to="./explore" title="Explorer les données." className="stretched-link"></Link>
      </div>
    </div>

    <div className="bottom-space">
     {/* Space after cards */}
    </div>

  </div>
</div>
  );
}