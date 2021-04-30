import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { WorldMap } from '../../components/WorldMap';
import { TileLayer, Marker, Popup } from 'react-leaflet';
import { TreeList } from '../../components/TreeList';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';
import jsonFile from '../../ontology.json';

export const Explore: React.FC = () => {

  const jsonStr = JSON.stringify(jsonFile);
  const jsonObject = JSON.parse(jsonStr);
  console.log('jsonObject contains : ', typeof jsonObject, jsonObject);

  return (
<div className="explore">

  <PageTitle
  img={imgBanner}
  imgAlt="Explore Banner"
  // imgSet=""
  >
    <h1 className="align-self-center">
      Explorateur
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
    tag="mysticeti"
    tagName={jsonObject.mysticeti.engName}
    tagDesc={jsonObject.mysticeti.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.mysticeti.childrenTag}
    />

    <TreeList
    tag="phocoeninae"
    tagName={jsonObject.phocoeninae.engName}
    tagDesc={jsonObject.phocoeninae.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.phocoeninae.childrenTag}
    />

    <TreeList
    tag="delphinidae"
    tagName={jsonObject.delphinidae.engName}
    tagDesc={jsonObject.delphinidae.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.delphinidae.childrenTag}
    />

    <TreeList
    tag="monodontidae"
    tagName={jsonObject.monodontidae.engName}
    tagDesc={jsonObject.monodontidae.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.monodontidae.childrenTag}
    />

    <TreeList
    tag="ziphidae"
    tagName={jsonObject.ziphidae.engName}
    tagDesc={jsonObject.ziphidae.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.ziphidae.childrenTag}
    />

    <TreeList
    tag="physeteroidea"
    tagName={jsonObject.physeteroidea.engName}
    tagDesc={jsonObject.physeteroidea.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.physeteroidea.childrenTag}
    />

    <TreeList
    tag="human"
    tagName={jsonObject.human.engName}
    tagDesc={jsonObject.human.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.human.childrenTag}
    />

    <TreeList
    tag="nature"
    tagName={jsonObject.nature.engName}
    tagDesc={jsonObject.nature.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.nature.childrenTag}
    />

  </section>
</div>
  );
}
