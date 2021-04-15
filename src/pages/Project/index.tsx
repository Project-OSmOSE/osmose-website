import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import mission from '../../images/dolphins-918752_640.jpg';
import valeur from '../../images/open_source.png';
import techno from '../../images/pexels-panumas-nikhomkhai-1148820.jpg';
import particip from '../../images/pexels-william-fortunato-6140678.jpg';
import logoifremer from '../../images/logo_ifremer.png'
import logoofb from '../../images/logo_ofb.png'
import logoisblue from '../../images/logo_isblue3.png'
import logothales from '../../images/logo_thales2.png'

export const Project: React.FC = () => {
  return (
<div className="project">

  <PageTitle
  img={imgBanner}
  imgAlt="Project Banner"
  // imgSet=""
  >
    <h1>
      Projet
    </h1>
  </PageTitle>

  <section className="container">
    <Card
    title="Notre mission"
    img={mission}
    imgSide="left"
    imgAlt="Groupe de dauphins"
    // subtitle=""
    // url=""
    // urlDesc=""
    >
      <p>
        OSmOSE est un Groupement d'Intérêt Scientifique (GIS) réunissant plusieurs domaines d'expertise afin de proposer à la communauté de l'acoustique passive sous-marine (UPA) des outils simples et puissants dédiés à l'analyse de l'environnement marin. <br/>
        OSmOSE aims to facilitate interactions between the different Underwater Passive Acoustics (UPA) actors, to achieve more collaborative works. <br/>
        How? Through open sciences and active collaboration on one (Science) side, and developing big data oriented and web based tools on the other (Technology) side. <br/>
      </p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Nos valeurs"
    img={valeur}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    // url="/"
    // urlDesc=""
    >
      <p>
        Nous nous attachons à développer des solutions facilement réutilisables en suivant les <a href="https://www.go-fair.org/fair-principles/"> principes FAIR</a>. <br/>
        Dans cette optique nous mettons à disposition en open source toute notre technologie afin de permettre à tous d'en profiter.
      </p>
    </Card>
  </section>

  <Banner>
    <p>
      <span className="">12 millions</span> <br/>
      de gros chiffres <br/>
      par minute
    </p>
    <p>
      <span className="">12.456</span> <br/>
      au bas mot !
    </p>
    <p>
      <span className="">3 trillions</span> <br/>
      C'est énorme !
    </p>
  </Banner>

  <section className="container">
    <Card
    title="Technologie"
    img={techno}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    // url="/techno"
    // urlDesc="En apprendre plus sur la technologie."
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.
      </p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Collaborer"
    img={particip}
    imgSide="right"
    imgAlt="Personnes travaillant en équipe"
    // subtitle=""
    url="/people"
    urlDesc="En apprendre plus sur notre équipe."
    >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.
    </p>
    </Card>
  </section>

  <div className="container">
    <p className="lead">Supports and funders :</p>
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
