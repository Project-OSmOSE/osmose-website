import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import pourquoi from '../../images/glacier-583419_640.jpg';

import mission from '../../images/dolphins-918752_640.jpg';
import valeur from '../../images/open_source.png';
import techno from '../../images/pexels-panumas-nikhomkhai-1148820.jpg';
import particip from '../../images/pexels-william-fortunato-6140678.jpg';

export const Project: React.FC = () => {
  return (
<div className="project">

  <PageTitle
  title="Project"
  img={imgBanner}
  imgAlt="Project Banner"
  imgSet=""
  >
  </PageTitle>

  <section className="container">
    <Card
    title="Pourquoi ?"
    img={pourquoi}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    // url="/people"
    urlDesc="Lien vers la page"
    >
      <p>
        OSmOSE est un Groupement d'Intérêt Scientifique (GIS) dédié
      </p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Notre mission"
    img={mission}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    // url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <Banner>
    <p>
      <span className="lar">12 millions</span> <br/>
      de gros chiffres par minute
    </p>
    <p>
      <span className="lar">12.456</span> <br/>
      au bas mot ! <br/>
    </p>
    <p>
      <span className="lar">3 trillion</span> <br/>
      C'est énorme !
    </p>
  </Banner>

  <section className="container">
    <Card
    title="Nos valeurs"
    img={valeur}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    // url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Technologie"
    img={techno}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    url="/techno"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Participer"
    img={particip}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    // url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>
</div>
);
}
