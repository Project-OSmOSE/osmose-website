import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { TreeList } from './TreeList';
import jsonFile from '../../ontology.json';
// import imgUrl from {imgPath + tagObject.image};
// import imgUrl from imgPath;
// import imgUrl from "../../img/ontology/{imgPath}";
// import imgExample from '../../img/ontology/Physeter_macrocephalus_NOAA.jpg';

const imgPath = '../../img/ontology/';
// let imgExample = '../../img/ontology/Physeter_macrocephalus_NOAA.jpg';

function getTagObject(tagName: string){
  const jsonObject = JSON.parse(JSON.stringify(jsonFile));
  const tagObject = jsonObject[tagName];
  // console.log(tagObject);
  return tagObject;
}

// test if tag is found in ontology
// needed to send it to the component
function testTag(tagTitle: string) {
  if (tagTitle === undefined || tagTitle === null){
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
  function hideIfNoOccurence(tagObject: any, titleLevel: string) {
    if (tagObject.occurrence < 1 && titleLevel !== 'h1'){
      let currentTree = document.getElementById(tagObject.engName + "-treelist");
      if(currentTree !== null && currentTree !== undefined){
        currentTree.classList.add('nodisplay');
      }
    }
  }

interface TagShowingProps {
  tagTitle: string;
  titleLevel: string;
}

export const TagShowing: React.FC<TagShowingProps> = ({
  tagTitle,
  titleLevel
}) => {
  const tagObject = getTagObject(tagTitle);
  const tagPagePath = "/ontology?" + tagTitle;
  // var totalOccurence: number;

  // Add taglist of children with at least 1 occurrence in DOM
  function addChildrenTagList() {
    // console.log('addChildrenTagList is called.');
    if (tagTitle !== undefined && tagObject.childrenTag !== null){
      let ulTree = document.getElementById(tagTitle);
      // console.log('ulTree contains (before) : ', typeof ulTree, ulTree);
      if (ulTree != null && ulTree.children[0] === undefined){
        // créer un élément li puis l'ajouter dans le document
        for (let i = 0; i < tagObject.childrenTag.length ; i++) {
          // let tagChildrenOccurence = jsonObject[tagObject.childrenTag[i]].occurrence;
          let tagChildrenOccurence = 12;
          if (tagChildrenOccurence > 0){
            // totalOccurence =+ tagChildrenOccurence;
            let liElem = document.createElement('li');
            let linkElem = document.createElement('a');
            linkElem.href = "/ontology?" + tagObject.childrenTag[i];
            // linkElem.innerText = jsonObject[tagObject.childrenTag[i]].engName + " ";
            linkElem.innerText = tagObject.engName;
            // let abbrElem = document.createElement('abbr');
            // abbrElem.innerHTML = "occ.";
            // abbrElem.title = "occurences";
            // let spanElem = document.createElement('span');
            // spanElem.classList.add('badge', 'badge-pill', 'text-secondary');
            // spanElem.innerHTML = tagChildrenOccurence + " ";
            // spanElem.appendChild(abbrElem);
            liElem.appendChild(linkElem);
            // liElem.appendChild(spanElem);
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
      // } else if (tagObject.childrenTag == null) {
      }
    } else {
      console.log('Les valeurs n\'ont pas été envoyé au composant.');
    }
  }

  let timeoutID = window.setTimeout( () => {
    if (document.readyState === 'complete') {
      // console.log('set Interval/Timeout');
      testTag(tagTitle);
      hideIfNoOccurence(tagObject, titleLevel);
      addChildrenTagList();
      window.clearTimeout(timeoutID);
    }
  }, 400);

  // addChildrenTagList();

  return (

    <div className="tagshowing" id={tagObject.engName + "-tagshowing"}>
      {titleLevel === 'h1' ? <h1> {tagTitle} </h1> : null}
      {titleLevel === 'h2' ? <h2> <Link to={tagPagePath}> {tagTitle} </Link> </h2> : null}
      {titleLevel === 'h3' ? <h3> <Link to={tagPagePath}> {tagTitle} </Link> </h3> : null}
      {tagObject.image !== 'example.jpg' ? <img src={imgPath + tagObject.image} alt={"Picture of a "+ tagTitle} className="illustration my-2" /> : null}
      {/* {tagObject.image !== 'example.jpg' ? <img src={imgExample} alt={"Picture of a "+ tagName} className="illustration my-2" /> : null} */}
      <p>
        {tagObject.engDesc} 
        {/* {tagOccurrence !== 0 ? <span className="badge badge-pill text-secondary"></span>{tagOccurrence + " occurrences"}</span> : null} */}
      </p>
      {/* totalOccurence */}

      <TreeList tagObject={tagObject} />

    </div>
  );
}
