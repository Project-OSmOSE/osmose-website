import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';

import './styles.css';
// import imgBanner from '../../images/maxresdefault.jpg';
// import imgProject from '../../images/pexels-kammeran-gonzalezkeola-7082101.jpg';
// import imgProject from '../../images/pexels-daniel-torobekov-5901263_2;1.jpg';
import imgProject from '../../images/illust/pexels-elianne-dipp-4666753_1280_thin.jpg';

import underwater from '../../images/illust/dolphins-918752_640.jpg';
// import valeur from '../../images/open_source.png';
// import techno from '../../images/pexels-panumas-nikhomkhai-1148820.jpg';
// import particip from '../../images/pexels-william-fortunato-6140678.jpg';
import logoODE from '../../images/logo/logo_seul_couleur_500_360.webp';
// import logoODE2 from '../../images/logo/logo_seul_bleu_500_360.webp';
import logoifremer from '../../images/logo/logo_ifremer.png';
import logoofb from '../../images/logo/logo_ofb.png';
import logoisblue from '../../images/logo/logo_isblue3.png';
import logothales from '../../images/logo/logo_thales2.png';
import logoFAIR from '../../images/logo/logo_fairlogo.png';

export const Project: React.FC = () => {
  return (
<div className="project">

  <PageTitle
  img={imgProject}
  imgAlt="Meet Banner"
  // imgSet=""
  >
    <h1>
      Meet
    </h1>
  </PageTitle>

  <section className="container my-5">
    <Card
    title="In a nutshell"
    img={logoODE}
    imgSide="right"
    imgAlt="Groupe de dauphins"
    // subtitle=""
    url="/people"
    urlDesc="Learn more about our team."
    >
      <p>
      OSmOSE (Open Science meets Ocean Sound Explorers) is a multi-institutional research consortium addressing underwater passive acoustics (UPA) methodological questions within projects dedicated to Ocean sustainability. <br/>
      OSmOSE, composed of marine biologists, acousticians, data scientists and computer professionals, was launched in Brest (France) in 2018.
      </p>
    </Card>
  </section>

  <Banner>
    <p>
      <span className="spring">4</span> <br/>
      research institutes
    </p>
    <p>
      <span className="spring">7</span> <br/>
      members
    </p>
    <p>
      <span className="spring">3</span> <br/>
      collaborative studies <br/>
    </p>
  </Banner>

  <section className="container my-5">
    <Card
    title="Our missions"
    img={underwater}
    imgSide="left"
    imgAlt="Groupe de dauphins"
    // subtitle=""
    // url=""
    // urlDesc=""
    >
      <p>

        <strong>Technology development</strong> 
        <ul>
          <li>create open-source standalone analysis tools </li> 
          <li>integrate these tools in workflows hosted in a sustainable collaborative platform </li>
        </ul>

        <strong>Scientific expertise</strong>
        <ul>
          <li> build a scientific community and assist the members in the use of data science technologies</li>
          <li> facilitate collaborative interactions between members</li>
          <li> perform large-scale meta-analysis, disseminated to the relevant communities via regular reviewed reports </li>
          <li> provide consulting expertise for various conservation organizations </li>
        </ul>
      </p>
    </Card>
  </section>

  <div className="container mt-5">
    <p className="lead">Partners</p>
  </div>

  <Banner>
    <img className="" src={logoifremer} alt="Ifremer logo" title="Ifremer logo" />
    <img className="" src={logoofb} alt="AFB logo" title="AFB logo" />
    <img className="" src={logoisblue} alt="ISblue logo" title="ISblue logo" />
    <img className="" src={logothales} alt="Thales Underwater systems logo" title="Thales Underwater systems logo" />
  </Banner>

  <Banner>
    <p>
      <span className="spring">13</span> <br/>
      datasets
    </p>
    <p>
      <span className="spring">13 TB</span> <br/>
      raw data
    </p>
    <p>
      <span className="spring">4</span> <br/>
      annotation campaigns <br/>
    </p>
    <p>
      <span className="spring">10</span> <br/>
      annotation classes <br/>
    </p>
  </Banner>

  <section className="container my-5">
    <Card
    title="Our values"
    // img={valeur}
    img={logoFAIR}
    imgSide="right"
    // imgAlt=""
    // subtitle=""
    // url="/"
    // urlDesc=""
    >
      <p>
      Applying Open science (FAIR) principles to Underwater Passive Acoustics.
      </p>

      <blockquote className="blockquote text-center">
        <p>
          Open science refers to the unhindered dissemination of results, methods and products from scientific research. It draws on the opportunity provided by recent digital progress to develop open access to publications and - as much as possible - data, source code and research methods.
        </p>
        <footer className="blockquote-footer"><a href="https://www.ouvrirlascience.fr/second-national-plan-for-open-science/"> ouvrirlascience.fr</a></footer>
      </blockquote>

        {/* Nous nous attachons à développer des solutions facilement réutilisables en suivant les <a href="https://www.go-fair.org/fair-principles/">principes FAIR</a>. <br/>
        Dans cette optique nous mettons à disposition en open source toute notre technologie afin de permettre à tous d'en profiter. */}

    </Card>
  </section>

  {/* <section className="container my-5">
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
  </section> */}

  {/* <section className="container my-5">
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
  </section> */}

</div>
);
}
