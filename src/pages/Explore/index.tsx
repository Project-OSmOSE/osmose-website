import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { WorldMap } from '../../components/WorldMap';
import { TreeList } from '../../components/TreeList';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';

export const Explore: React.FC = () => {
  return (
<div className="explore">

  <PageTitle
  img={imgBanner}
  imgAlt="Explore Banner"
  // imgSet=""
  >
    <h1 className="align-self-center">
      Explore
    </h1>
  </PageTitle>

  <div className="container">
    <h2>Datasets</h2>
  </div>

  <div className="container-fluid">
    <WorldMap>

    </WorldMap>
  </div>

  <section className="container">

    <h2>Ontology</h2>

    <TreeList
    title="Anthropo"
    titlelink="/explore"
    >
      <ul>
        <li><Link to="/explore">Bateau</Link> </li>
      </ul>
    </TreeList>

    <TreeList
    title="Cétacé"
    titlelink="/explore"
    >
      <ul>
        <li><Link to="/explore">Baleine bleue</Link> </li>
        <li><Link to="/explore">Baleine à bosse</Link> </li>
        <li><Link to="/explore">Orque</Link> </li>
        <li><Link to="/explore">Dauphin</Link> </li>
      </ul>
    </TreeList>

    <TreeList
    title="Geo"
    titlelink="/explore"
    >
      <ul>
        <li><Link to="/explore">Vent</Link> </li>
        <li><Link to="/explore">Pluie</Link> </li>
        <li><Link to="/explore">Chute de glacier</Link> </li>
      </ul>
    </TreeList>

  </section>
</div>
);
}
