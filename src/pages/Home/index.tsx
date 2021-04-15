import React from 'react';
import { PageTitle } from '../../components/PageTitle';

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
      OSmOSE<br/>
      <span>Underwater passive acoustics for ocean observation</span>
    </h1>
  </PageTitle>

</div>
);
}
