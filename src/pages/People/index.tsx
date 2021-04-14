import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { CardMember } from '../../components/CardMember';
import { CardAncientMember } from '../../components/CardAncientMember';

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
  title="People"
  img={imgBanner}
  imgAlt="People Banner"
  // imgSet=""
  >
  </PageTitle>

  <section className="container">
    <Card
    title="Qui sommes-nous ?"
    img={brest}
    imgSide="left"
    imgAlt="Génial"
    // url="/people"
    urlDesc="Lien vers la page"
    >
      <p>
        OSmOSE est composé d'universitaires et de chercheurs travaillant dans le domaine de l'acoustique sous-marine, de la l'observation des océans et de la protection de la biodiversité marine. Cette équipe, basée à Brest, s'est associée à des développeurs talentueux pour mettre en place des technologies d'analyse des sons océaniques.
      </p>
    </Card>
  </section>

  <div className="container my-4">
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
    name="Dodo LA CASE"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Génial"
    job="Data Scientist"
    // url=""
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember 
    name="Floflo BOUTON"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Génial"
    job="Data Scientist"
    // url="http://www.google.com"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat?</p>
    </CardMember>
  </section>

  <section className="container">

    <h2>Ancients members</h2>
    <p>Remerciements</p>

    <div className="grid-container">
      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Henri BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>

      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>
      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>
      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>
      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>
      <CardAncientMember 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Michel BEAUCOUR"
        job="Super"
        // url=""
      >
      </CardAncientMember>
    </div>

    {/* large image of team together */}

  </section>
</div>
);
}