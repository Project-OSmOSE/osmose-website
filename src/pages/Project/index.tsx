import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Card } from '../../components/Card';
import { Banner } from '../../components/Banner';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import logo from '../../images/logo_OSmOSE_neg.png';

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
    title="Osmose"
    img={logo}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Osmose"
    img={logo}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <Banner>
    <span>Bonjour</span>
    <span>à</span>
    <span>vous</span>
    <span>tous</span>
  </Banner>

  <section className="container">
    <Card
    title="Osmose"
    img={logo}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Osmose"
    img={logo}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Osmose"
    img={logo}
    imgSide="right"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <section className="container">
    <Card
    title="Osmose"
    img={logo}
    imgSide="left"
    imgAlt="Génial"
    // subtitle=""
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>
</div>
);
}
