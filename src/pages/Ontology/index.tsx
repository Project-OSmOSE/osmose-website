import React from 'react';
// import { TreeList } from '../../components/TreeList';
import { WorldMap } from '../../components/WorldMap';
import { Link } from 'react-router-dom';

// import jsonFile from './ontology.json';
import jsonFile from '../../ontology.json';
import './styles.css';
// import { JsonObjectExpression } from 'typescript';

// page title got from url fragment
let urlHash = window.location.hash.slice(1);
console.log('urlHash contains : ', urlHash);
const jsonStr = JSON.stringify(jsonFile);
const jsonObject = JSON.parse(jsonStr);
// replacement variables not required

// REMPLACER CE QUI SUIS PAR UNE QUERY DU GENRE ?q=valeurniveau1+valeurniveau2+valeurniveau3

export const Ontology: React.FC = () => {

  let keyPath = jsonObject[urlHash];
  console.log('keyPath contains : ', typeof keyPath, keyPath);

  let title = keyPath.title;
  let description = keyPath.description;
  // let image = keyPath.image;
  let parentTag = keyPath.parentTag;
  let childrenTag = keyPath.childrenTag;
  // let occurences = keyPath.occurences;
  console.log('childrenTag contains : ', typeof childrenTag, childrenTag);

  function dbQuery() {

  }

  return (
<div className="ontology">
  <div className="container-fluid">
    {/* arborescence en ligne */}
  </div>

  <div className="container">
    {/* <TreeList
    tag="mysticeti"
    tagName={jsonObject.mysticeti.engName}
    tagDesc={jsonObject.mysticeti.engDesc}
    // tagImage=""
    // tagParent=""
    tagChildren={jsonObject.mysticeti.childrenTag}
    /> */}
  </div>

  <div className="container">
    <h2>Occurences in datasets</h2>
  </div>

  <div className="container-fluid">
    <WorldMap>
    </WorldMap>
  </div>

</div>
  );
}