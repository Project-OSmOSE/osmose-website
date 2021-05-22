import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { CardMember } from '../../components/CardMember';
import { CardMemberTextless } from '../../components/CardMemberTextless';

import './styles.css';
// import imgBanner from '../../images/maxresdefault.jpg';
// import imgPeople from '../../images/pexels-jeremy-bishop-2397610_1280_thin.jpg';
import imgPeople from '../../images/pexels-daniel-torobekov-5901263_1280_thin.jpg';

import brest from '../../images/port-1338851_640.jpg';
import enstalogo from '../../images/logo_ensta.png';
import labsticlogo from '../../images/logo_lab-stic.png';
import ubologo from '../../images/logo2_ubo.png';
// import imtlogo from '../../images/logo_imt.jpg';

import defautPortrait from '../../images/default_profil.png'
// import projectImg from '../../images/logo_project.png';

export const People: React.FC = () => {
  return (
<div className="people">

  <PageTitle
  img={imgPeople}
  imgAlt="People Banner"
  // imgSet=""
  >
    <h1 className="align-self-center">
      People
    </h1>
  </PageTitle>

  <section className="container my-5">
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
    <p className="lead">Instituts affiliées :</p>
  </div>

  <Banner>
    <img className="" src={enstalogo} alt="Ensta Bretagne logo" title="Ensta Bretagne logo" />
    <img className="" src={labsticlogo} alt="Lab-Stic logo" title="Lab-Stic logo" />
    <img className="" src={ubologo} alt="UBO logo" title="UBO logo" />
    {/* <img className="" src={imtlogo} alt="IMT Atlantique logo" title="IMT Atlantique logo" /> */}
  </Banner>

  <section className="container my-5">

    <h2>ODE</h2>

    <p>The ODE (Ocean Data Explorer) team develop all the computer technology used to manage and process data.</p>

    <CardMember 
    name="Joseph Allemandou"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Joseph’s portrait."
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

    <CardMember 
    name="Alexandre Degurse"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Alexandre’s portrait."
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Erwan Keribin"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Erwan’s portrait."
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

    <CardMember
    name="Romain Vovard"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Romain’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>
  </section>

  <section className="container my-5">

    <h2>AIe</h2>

    <p>AIe develop all the computer technology used to make computers learn and recognize ocean sounds.</p>

    <CardMember 
    name="Dorian Cazau"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Dorian’s portrait."
    job="Data Scientist"
    // url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

    <CardMember
    name="Paul Nguyen Hong Duc"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Paul’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Richard Dréo"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Richard’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate
      </p>
    </CardMember>

  </section>

  <section className="container my-5">

    <h2>Underwater Passive Acoustics sciences</h2>

    <p>Ocean science specialists.</p>

    <CardMember 
    name="Julie Béesau"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Julie’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    >
      <p className="quote">
      Je suis ingénieur d’étude au sein de l’ENSTA Bretagne depuis 2017 et je travaille dans l’équipe de bioacoustique sur le suivi des populations de mammifères marins par acoustique passive. L’acoustique passive est, pour moi, un outil pour l’étude et la conservation des mammifères marins et plus précisément des cétacés le long des côtes françaises. Au sein de l’équipe OSMOSE, je travaille du côté des scientifiques en tant qu’utilisatrice des outils développés par les informaticiens notamment sur la plateforme d’annotation en ligne APLOSE ainsi qu’à l’analyse des résultats obtenus et à leurs valorisations scientifiques.
      </p>
    </CardMember>

    <CardMember 
    name="Flore Samaran"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Flore’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Maëlle Torterotot"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Maëlle’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    >
      <p>
      Je suis ingénieur de recherche à l’ENSTA Bretagne depuis 2020, où j’ai précédemment effectué ma thèse de doctorat en co-encadrement avec l’Université de Bretagne Occidentale. Je travaille au sein de l’équipe bioacoustique et m’intéresse aux questions de suivi des mammifères marins par acoustique passive, de l’océan Indien aux côtes bretonnes. Je suis utilisatrice des outils développés par l’équipe OSmOSE, notamment de la plateforme d’annotation Aplose, mais aussi des notebooks de calculs de descripteurs acoustiques. J’essaie en parallèle de m’investir dans le développement de ces outils.
      </p>
    </CardMember>

    <CardMember
    name="Olivier Adam"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Olivier’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Delphine Mathias"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Delphine’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Yann Doh"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Yann’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

    <CardMember
    name="Gaetan Richard"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Gaetan’s portrait"
    // job="Data Scientist"
    url="https://www.google.com"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>

  </section>

  <section className="container my-5">

    <h2>Ancient members</h2>
    <p>Remerciements.</p>

    <div className="grid-container">
      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Ma photo"
        name="Henri BEAUCOUR"
        job="Stagiaire"
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