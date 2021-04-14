import React from 'react';
import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';
import { PageTitle } from '../../components/PageTitle';

import './styles.css';
import logo from '../../images/logo_OSmOSE_neg.png'
import logoifremer from '../../images/logo_ifremer.png'
import logoofb from '../../images/logo_ofb.png'
import logoisblue from '../../images/logo_isblue3.png'
import logothales from '../../images/logo_thales2.png'
import projectImg from '../../images/logo_project.png';
import imgBanner from '../../images/maxresdefault.jpg';

export const Home: React.FC = () => {
  return (
<div className="home">

  {/* <img src={logo} alt="OSmOSE logo: Open Science meets Ocean Sound Explorers" /> */}

  <PageTitle 
  title="OSmOSE"
  img={imgBanner}
  imgAlt="People Banner"
  // imgSet=""
  >
  </PageTitle>

    <section className="container">
      <Card 
      title="Project Overview"
      img={projectImg}
      imgSide="left"
      imgAlt="Génial"
      url="/project"
      urlDesc="Lien vers la page"
      >
        <p>OSmOSE aims to facilitate interactions between the different <strong>Underwater Passive Acoustics (UPA)</strong> actors, to achieve more collaborative works, i.e. tend to the FAIR principles.</p>
        <p>How? Through open sciences and active collaboration on one (Science) side, and developing big data oriented and web based tools on the other (Technology) side.</p>
      </Card>
    </section>

    <section className="container">
      <Card
      title="People"
      img={projectImg}
      imgSide="right"
      imgAlt="Génial"
      url="/people"
      urlDesc="Lien vers la page"
      >
        <p>OSmOSE is made of several teams working togeter:</p>
        <ul>
          <li><strong>ODE (Ocean Data Explorer)</strong>: develop all the computer technology used to manage and process Data (at scale with speed and in context, naturally Big)</li>
          <li><strong>AIe</strong>: Develop all the computer technology used to mage computers learn and recognize ocean sounds like humans</li>
          <li><strong>Underwater Passive Acoustics sciences</strong>: do all the ocean science based on UPA (mainly about whale monitoring and conservation for the moment)</li>
        </ul>
      </Card>
    </section>

  <div className="container">
    <p>Our supports and funders:</p>
  </div>
  <Banner>
    <img className="" src={logoifremer} alt="Ifremer logo" title="Ifremer logo" />
    <img className="" src={logoofb} alt="AFB logo" title="AFB logo" />
    <img className="" src={logoisblue} alt="ISblue logo" title="ISblue logo" />
    <img className="" src={logothales} alt="Thales Underwater systems logo" title="Thales Underwater systems logo" />
  </Banner>
</div>
);
}
