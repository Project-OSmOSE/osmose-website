import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { Banner } from '../../components/Banner';
import { Card } from '../../components/Card';
import { CardMember } from '../../components/CardMember';
import { CardAncientMember } from '../../components/CardAncientMember';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import logo from '../../images/logo_OSmOSE_neg.png';
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
    title="Osmose"
    img={logo}
    imgSide="left"
    imgAlt="Génial"
    url="/people"
    urlDesc="Lien vers la page"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat? Facilis sint dolor illum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima et temporibus aliquid perferendis facilis, nihil est cumque? Odio commodi fuga quod ipsa. Earum ut labore totam inventore deserunt! Voluptate, explicabo.</p>
    </Card>
  </section>

  <div className="container">
    <p>Instituts affiliées :</p>
  </div>
  <Banner>
    <img className="card-img" src={logo} alt="" title="" />
    <img className="card-img" src={logo} alt="" title="" />
    <img className="card-img" src={logo} alt="" title="" />
    <img className="card-img" src={logo} alt="" title="" />
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus officia molestias, voluptate sapiente quod eaque sunt obcaecati ipsam consectetur error dolores iusto eius quaerat?</p>
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