import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { TreeList } from '../../components/TreeList';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';

export const Explore: React.FC = () => {
  return (
<div className="explore">

  <PageTitle title="Explore" img={imgBanner} imgAlt="Explore Banner" imgSet="">
  </PageTitle>

  <div className="container">

    <h2>Ontologie</h2>

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
        <li> <Link to="/explore">Baleine bleue</Link> </li>
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

  </div>
</div>
);
}
