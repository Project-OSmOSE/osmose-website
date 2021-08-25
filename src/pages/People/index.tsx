import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { CardMember } from '../../components/CardMember';
import { CardMemberTextless } from '../../components/CardMemberTextless';

import './styles.css';
// import imgBanner from '../../images/maxresdefault.jpg';
// import imgPeople from '../../images/pexels-jeremy-bishop-2397610_1280_thin.jpg';
import imgPeople from '../../images/illust/pexels-daniel-torobekov-5901263_1280_thin.jpg';

import brest from '../../images/illust/port-1338851_640.jpg';
import enstalogo from '../../images/logo/logo_ensta.png';
import labsticlogo from '../../images/logo/logo_lab-stic.png';
import ubologo from '../../images/logo/logo2_ubo.png';
// import imtlogo from '../../images/logo_imt.jpg';

import defautPortrait from '../../images/people/default_profil.png'
// import projectImg from '../../images/logo_project.png';
import florePortrait from '../../images/people/team_flore_420_420.webp'
import juliePortrait from '../../images/people/team_Photo_Julie_420_420.webp'
import dorianPortrait from '../../images/people/team_dodo_420_420.webp'

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
    title="Who are we ?"
    img={brest}
    imgSide="left"
    imgAlt="Brest"
    // url="/people"
    // urlDesc="Lien vers la page"
    >

      <p>
      Launched in Brest (France) in 2018, OSmOSE is a multi-institutional research consortium composed of marine biologists, acousticians, data scientists and computer professionals.
      </p>
      {/* <p>
        OSmOSE est composé d'universitaires et de chercheurs travaillant dans le domaine de l'acoustique sous-marine, de l'observation des océans et de la protection de la biodiversité marine. Cette équipe, basée à Brest, s'est associée à des développeurs talentueux pour mettre en place des technologies d'analyse des sons océaniques.
      </p> */}
        {/* OSmOSE is made of several teams working togeter:

        ODE (Ocean Data Explorer): develop all the computer technology used to manage and process Data (at scale with speed and in context, naturally Big)
        AIe: Develop all the computer technology used to mage computers learn and recognize ocean sounds like humans
        Underwater Passive Acoustics sciences: do all the ocean science based on UPA (mainly about whale monitoring and conservation for the moment) */}
    </Card>
  </section>

  <div className="container mt-5">
    {/* <p className="lead">Instituts affiliées :</p> */}
  </div>

  <Banner>
    <img className="" src={enstalogo} alt="Ensta Bretagne logo" title="Ensta Bretagne logo" />
    <img className="" src={labsticlogo} alt="Lab-Stic logo" title="Lab-Stic logo" />
    <img className="" src={ubologo} alt="UBO logo" title="UBO logo" />
    {/* <img className="" src={imtlogo} alt="IMT Atlantique logo" title="IMT Atlantique logo" /> */}
  </Banner>

  <section className="container my-5">

    <h2>ODE</h2>

    <p>We (Ocean Data Explorer) develop all the computer technology used to manage and process data.</p>

    <CardMember
    name="Erwan Keribin"
    img={defautPortrait}
    imgSide="left"
    imgAlt="Erwan’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    // urlDesc="Page personnelle"
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
    // url="https://www.google.com"
    // urlDesc="Page personnelle"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Consectetur error dolores iusto eius quaerat?
      </p>
    </CardMember>
  </section>

  <section className="container my-5">

    <h2>AIe</h2>
    {/* Artificial intelligence explorer */}

    <p>We (Artificial Intelligence explorer) develop all the machine intelligence for ocean sound exploration.</p>

    <CardMember 
    name="Dorian Cazau"
    img={dorianPortrait}
    imgSide="left"
    imgAlt="Dorian’s portrait."
    job="Data Scientist"
    url="https://cazaudorian.wixsite.com/homepage"
    urlDesc="Page personnelle"
    >
      <p>
        I'm a french Assistant Professor specialized in Data Sciences for Ocean Sciences, currently working in the Lab-STICC at ENSTA Bretagne in Brest (French Brittany). <br/>
        My scientific background is in fundamental physics, audio signal processing and general acoustic engineering, with which I have more recently combined statistical modeling and machine learning methods. My research can be summarized as the development of original physics-based machine learning methods to answer concrete questions from different acoustic-using communities, including oceanography, bioacoustics and music.
      </p>
    </CardMember>

    <CardMember
    name="Paul Nguyen Hong Duc"
    img={defautPortrait}
    imgSide="right"
    imgAlt="Paul’s portrait"
    // job="Data Scientist"
    >
      <p>
      I am a postdoctoral fellow jointly hosted at <a href="https://people.math.carleton.ca/~davecampbell/Dave_Campbell.html">Carleton University</a> and Simon Fraser University. I am working on the development of deep learning models to help identify Southern Resident Killer Whale vocalizations in the Salish Sea. I have a background in image and signal processing and I did my doctoral research project at Sorbonne Université in France. The aim was to deal with the lack of annotated data (weak supervision) for underwater acoustic scene or event detection and classification in a Big Data context. My research interests in the marine environment include (but are not limited to) characterizing a soundscape, and developing detection and classification models for underwater sounds.
      </p>
    </CardMember>
  </section>

  <section className="container my-5">

    <h2>OSE</h2> 
    <p>
      We (Ocean Sound Explorer) design and use tools, conduct collaborative studies and inform relevant communities.
    </p>

    <CardMember 
    name="Julie Béesau"
    img={juliePortrait}
    imgSide="left"
    imgAlt="Julie’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    // urlDesc="Page personnelle"
    >
      <p>
      I am a research engineer at ENSTA Bretagne since 2017 and I work in the bioacoustic team on the monitoring of marine mammal population by passive acoustics. Passive acoustics is, for me, a tool for the study and conservation of marine mammals and more precisely cetaceans along the French coast. Within the OSMOSE team, I work on the scientists' side as a user of the tools developed by the computer scientists, particularly on the APLOSE online annotation platform, as well as analysing the results obtained and their scientific use.
      </p>
      {/* <p className="quote">
        Je suis ingénieur d’étude au sein de l’ENSTA Bretagne depuis 2017 et je travaille dans l’équipe de bioacoustique sur le suivi des populations de mammifères marins par acoustique passive. L’acoustique passive est, pour moi, un outil pour l’étude et la conservation des mammifères marins et plus précisément des cétacés le long des côtes françaises. Au sein de l’équipe OSMOSE, je travaille du côté des scientifiques en tant qu’utilisatrice des outils développés par les informaticiens notamment sur la plateforme d’annotation en ligne APLOSE ainsi qu’à l’analyse des résultats obtenus et à leurs valorisations scientifiques.
      </p> */}
    </CardMember>

    <CardMember 
    name="Flore Samaran"
    img={florePortrait}
    imgSide="right"
    imgAlt="Flore’s portrait."
    // job="Data Scientist"
    // url="https://www.google.com"
    // urlDesc="Page personnelle"
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
    // urlDesc="Page personnelle"
    >
      <p>
        I am a research engineer at ENSTA Bretagne since 2020, where I previously completed my PhD thesis in co-supervision with the Université de Bretagne Occidentale. I work in the bioacoustics team and I am interested in passive acoustic monitoring of marine mammals, from the Indian Ocean to the Brittany's coasts. I use the tools developed by the OSmOSE team, in particular the annotation platform Aplose, but also the notebooks for calculating acoustic descriptors. I am also investing in the development of these tools.
      </p>
      {/* <p>
        Je suis ingénieur de recherche à l’ENSTA Bretagne depuis 2020, où j’ai précédemment effectué ma thèse de doctorat en co-encadrement avec l’Université de Bretagne Occidentale. Je travaille au sein de l’équipe bioacoustique et m’intéresse aux questions de suivi des mammifères marins par acoustique passive, de l’océan Indien aux côtes bretonnes. Je suis utilisatrice des outils développés par l’équipe OSmOSE, notamment de la plateforme d’annotation Aplose, mais aussi des notebooks de calculs de descripteurs acoustiques. J’essaie en parallèle de m’investir dans le développement de ces outils.
      </p> */}
    </CardMember>

  </section>

  <section className="container my-5">

    <h2>Ancient members</h2>
    <p>Acknowledgements.</p>

    <div className="grid-container">
      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Joseph’s portrait."
        name="Joseph Allemandou"
        // job="Lead"
        // url="https://www.google.com"
        // urlDesc="Page personnelle"
        >
      </CardMemberTextless>

      <CardMemberTextless 
        img={defautPortrait}
        imgAlt="Alexandres portrait"
        name="Alexandre Degurse"
        // job=""
        // url="https://www.google.com"
        // urlDesc="Page personnelle"
        >
      </CardMemberTextless>

    </div>

    {/* large image of team together */}

  </section>
</div>
);
}