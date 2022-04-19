import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { PageTitle } from '../../components/PageTitle';
import { WorldMap } from '../../components/WorldMap';
// import { TileLayer, Marker, Popup } from 'react-leaflet';
import { TagShowing } from '../../components/TagShowing';

import './styles.css';
// import imgBanner from '../../img/maxresdefault.jpg';
// import imgExplore from '../../img/pexels-daniel-torobekov-5901263_top.jpg';
// import imgExplore from '../../img/pexels-elianne-dipp-4666753_2;1.jpg';
import imgExplore from '../../img/illust/pexels-jeremy-bishop-2422915_1920_thin.jpg';

// import jsonFile from '../../ontology.json';

export const Explore: React.FC = () => {

  // const jsonStr = JSON.stringify(jsonFile);
  // const jsonObject = JSON.parse(jsonStr);
  // console.log('jsonObject contains : ', typeof jsonObject, jsonObject);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
<div className="explore">

  <PageTitle
  img={imgExplore}
  imgAlt="Explore Banner"
  // imgSet=""
  >
    <h1 className="align-self-center">
      Explore
    </h1>
  </PageTitle>

  <div className="container my-5">
    <h2>Datasets</h2>
    <WorldMap
    // datasetList=""
    >
    </WorldMap>
  </div>

  <div className="container my-5">
    <h2 id="ontology">Ontology</h2>

    <div className="container grid-container">
      <div className="half">
        <TagShowing
        tagTitle="delphinidae"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.delphinidae.engName}
        // tagDesc={jsonObject.delphinidae.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.delphinidae.childrenTag}
        />

        <TagShowing
        tagTitle="monodontidae"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.monodontidae.engName}
        // tagDesc={jsonObject.monodontidae.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.monodontidae.childrenTag}
        />

        <TagShowing
        tagTitle="mysticeti"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.mysticeti.engName}
        // tagDesc={jsonObject.mysticeti.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.mysticeti.childrenTag}
        />
      </div>

      <div className="half">
        <TagShowing
        tagTitle="phocoeninae"
        titleLevel="h3"
        />

        <TagShowing
        tagTitle="physeteroidea"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.physeteroidea.engName}
        // tagDesc={jsonObject.physeteroidea.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.physeteroidea.childrenTag}
        />

        <TagShowing
        tagTitle="ziphidae"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.ziphidae.engName}
        // tagDesc={jsonObject.ziphidae.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.ziphidae.childrenTag}
        />

        <TagShowing
        tagTitle="human"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.human.engName}
        // tagDesc={jsonObject.human.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.human.childrenTag}
        />

        <TagShowing
        tagTitle="nature"
        titleLevel="h3"
        // image="no"
        // tagName={jsonObject.nature.engName}
        // tagDesc={jsonObject.nature.engDesc}
        // // tagImage=""
        // // tagParent=""
        // tagChildren={jsonObject.nature.childrenTag}
        />
      </div>
    </div>
  </div>
</div>
  );
}
