import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import jsonFile from '../../ontology.json';
// import imgUrl from {imgPath + tagImage};
// import imgUrl from imgPath;
// import imgUrl from "../../images/ontology/{imgPath}";
// import imgExample from '../../images/ontology/Physeter_macrocephalus_NOAA.jpg';
export interface TreeListProps {
  tag: string;
  titleLevel: string;
}

export const TreeList: React.FC<TreeListProps> = ({
  tag,
  titleLevel
}) => {
  const jsonStr = JSON.stringify(jsonFile);
  const jsonObject = JSON.parse(jsonStr);
  // console.log('jsonObject contains : ', typeof jsonObject, jsonObject);
  const imgPath = '../../images/ontology/';
  // let imgExample = '../../images/ontology/Physeter_macrocephalus_NOAA.jpg';

  // if (tag !== undefined && tag !== null){
  var tagName: string = jsonObject[tag].engName;
  var tagDesc: string = jsonObject[tag].engDesc;
  var tagImage: string = jsonObject[tag].image;
  var tagOccurrence: number = jsonObject[tag].occurrence;
  var tagParent: string = jsonObject[tag].parentTag;
  var tagChildren: string[] | null = jsonObject[tag].childrenTag;
  var tagPagePath =  "/ontology?" + tag;
  // }

  var totalOccurence: number;

  // test if tag is found in ontology
  // need to send it to the component
  function testTag() {
    if (tag === undefined || tag === null){
      return (
        <div className="treelist">
          <h3> Not Found. </h3>
          <p>
            No such tag was found. You can go back to the <Link to="/explore"> explore </Link> page
          </p>
        </div>
      );
    }
  }

  // if tagOccurence = 0, do not show tag (and treelist) unless titleLevel = 'h1'
  function hideIfNoOccurence() {
    if (jsonObject[tag].occurrence < 1 && titleLevel !== 'h1'){
      let currentTree = document.getElementById(tag + "-treelist");
      if(currentTree !== null && currentTree !== undefined){
        currentTree.classList.add('nodisplay');
      }
    }
  }

  // Add taglist of children with at least 1 occurrence in DOM
  function addChildrenTagList() {
    // console.log('addChildrenTagList is called.');
    if (tag !== undefined && tagChildren !== null){
      let ulTree = document.getElementById(tag);
      // console.log('ulTree contains (before) : ', typeof ulTree, ulTree);
      if (ulTree != null && ulTree.children[0] === undefined){
        // créer un élément li puis l'ajouter dans le document
        for (let i = 0; i < tagChildren.length ; i++) {
          let tagChildrenOccurence = jsonObject[tagChildren[i]].occurrence;
          if (tagChildrenOccurence > 0){
            // totalOccurence =+ tagChildrenOccurence;
            let liElem = document.createElement('li');
            let linkElem = document.createElement('a');
            linkElem.href = "/ontology?" + tagChildren[i];
            linkElem.innerText = jsonObject[tagChildren[i]].engName + " ";
            let abbrElem = document.createElement('abbr');
            abbrElem.innerHTML = "occ.";
            abbrElem.title = "occurences";
            let spanElem = document.createElement('span');
            spanElem.classList.add('badge', 'badge-pill', 'text-secondary');
            spanElem.innerHTML = tagChildrenOccurence + " ";
            spanElem.appendChild(abbrElem);
            liElem.appendChild(linkElem);
            liElem.appendChild(spanElem);
            if (ulTree != null){
              ulTree.appendChild(liElem);
            } else{
              console.log('impossible de cibler l\'id.');
            }
          // } else{
          //   console.log(currentTag, 'n\'a pas d\'occurences.');
          }
        }
        console.log('ulTree contains (after) : ', typeof ulTree, ulTree);
      // } else if (tagChildren == null) {
      }
    } else {
      console.log('Les valeurs n\'ont pas été envoyé au composant.');
    }
  }

  let timeoutID = window.setTimeout( () => {
    if (document.readyState === 'complete') {
      // console.log('set Interval/Timeout');
      testTag();
      hideIfNoOccurence();
      addChildrenTagList();
      window.clearTimeout(timeoutID);
    }
  }, 400);

  // addChildrenTagList();

  return (

    <div className="treelist" id={tag + "-treelist"}>
      {titleLevel === 'h1' ? <h1> {tagName} </h1> : null}
      {titleLevel === 'h2' ? <h2> <Link to={tagPagePath}> {tagName} </Link> </h2> : null}
      {titleLevel === 'h3' ? <h3> <Link to={tagPagePath}> {tagName} </Link> </h3> : null}
      {tagImage !== 'example.jpg' ? <img src={imgPath + tagImage} alt={"Picture of a "+ tagName} className="illustration my-2" /> : null}
      {/* {tagImage !== 'example.jpg' ? <img src={imgExample} alt={"Picture of a "+ tagName} className="illustration my-2" /> : null} */}
      <p>{tagDesc} {tagOccurrence !== 0 ? <span className="badge badge-pill text-secondary">{tagOccurrence + " occurrences"}</span> : null}</p>
      {/* totalOccurence */}
      <ul className="ultree" id={tag}>
      </ul>
    </div>
  );
}
