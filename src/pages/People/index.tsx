import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { CardMember } from '../../components/CardMember';
import { CardMemberTextless } from '../../components/CardMemberTextless';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import brest from '../../images/port-1338851_640.jpg';
import enstalogo from '../../images/logo_ensta.png';
import labsticlogo from '../../images/logo_lab-stic.png';
import ubologo from '../../images/logo2_ubo.png';
import imtlogo from '../../images/logo_imt.jpg';

import defautPortrait from '../../images/default_profil.png'
// import projectImg from '../../images/logo_project.png';

export const People: React.FC = () => {
return (
<div className="people">

  <PageTitle
  img={imgBanner}
  imgAlt="People Banner"
  // imgSet=""
  >
    <h1 className="align-self-center">
      People
    </h1>
  </PageTitle>

  <section className="container">
    <Card
    title="Qui sommes-nous ?"
    img={brest}
    imgSide="left"
    imgAlt="Brest"
    // url="/people"
    // urlDesc="Lien vers la page"
    >
      <p>
        OSmOSE est composé d'universitaires et de chercheurs travaillant dans le domaine de l'acoustique sous-marine, de l'observation des océans et de la protection de la biodiversité marine. Cette équipe, basée à Brest, s'est associée à des développeurs talentueux pour mettre en place des technologies d'analyse des sons océaniques.
      </p>
        {/* OSmOSE is made of several teams working togeter:

        ODE (Ocean Data Explorer): develop all the computer technology used to manage and process Data (at scale with speed and in context, naturally Big)
        AIe: Develop all the computer technology used to mage computers learn and recognize ocean sounds like humans
        Underwater Passive Acoustics sciences: do all the ocean science based on UPA (mainly about whale monitoring and conservation for the moment) */}
    </Card>
  </section>

  <div className="container mt-5">
    <p>Instituts affiliées :</p>
  </div>
  <Banner>
    <img className="" src={enstalogo} alt="Ensta Bretagne logo" title="Ensta Bretagne logo" />
    <img className="" src={labsticlogo} alt="Lab-Stic logo" title="Lab-Stic logo" />
    <img className="" src={ubologo} alt="UBO logo" title="UBO logo" />
    <img className="" src={imtlogo} alt="IMT Atlantique logo" title="IMT Atlantique logo" />
  </Banner>

  <section className="container">

    <h2>Core team</h2>

    <CardMember 
    name="Henri BEAUCOUR"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Portrait de "
    job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

    <CardMember 
    name="Henri BEAUCOUR"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Portrait de "
    job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Henri BEAUCOUR"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Portrait de "
    job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

    <CardMember
    name="Henri BEAUCOUR"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Portrait de "
    job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>
  </section>

  <section className="container">

    <h2>Ancient members</h2>
    <p>Remerciements.</p>

    <div className="grid-container">
      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Henri BEAUCOUR"
        job="Detective"
        url="https://www.google.com"
        >
      </CardMemberTextless>

      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Detective"
        url="https://www.google.com"
        >
      </CardMemberTextless>
      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Detective"
        url="https://www.google.com"
        >
      </CardMemberTextless>
      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Detective"
        // url=""
      >
      </CardMemberTextless>
    </div>

    {/* large image of team together */}

  </section>
</div>
);
}