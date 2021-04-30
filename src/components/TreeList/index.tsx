import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export interface TreeListProps {
  // tagObject?: object;
  tag?: string;
  tagName?: string;
  tagDesc?: string;
  tagImage?: string;
  tagParent?: string;
  tagChildren?: Array<string>;
}

export const TreeList: React.FC<TreeListProps> = ({
  // tagObject,
  tag,
  tagName,
  tagDesc,
  tagImage,
  tagParent,
  tagChildren
  // children
}) => {
  let tagPagePath =  "/ontology#" + tag;

  let intervalID = window.setInterval( () => {
    if (document.readyState === 'complete') {
    addChildrenTagList();
    window.clearInterval(intervalID);
  }
  }, 100);

  function addChildrenTagList() {
    if (tag != null && tagChildren != null){
      let ulTree = document.getElementById(tag);

      // créer un élément li avec un contenu chaque fois puis l'ajouter dans le document
      for (let i = 0; i < tagChildren.length ; i++) {
        let liElem = document.createElement('li');
        let linkElem = document.createElement('a');
        linkElem.href = "/ontology#" + tagChildren[i];
        linkElem.innerText = tagChildren[i]; // à améliorer

        liElem.appendChild(linkElem);
        // console.log('liElem contains : ', typeof liElem, liElem);
        if (ulTree != null){
          ulTree.appendChild(liElem);
        } else{
          console.log('impossible de cibler l\'id.');
        }
      }
      console.log('ulTree contains : ', typeof ulTree, ulTree);
    } else{
      console.log('Les valeurs n\'ont pas été envoyé au composant.');
    }
  }

  return (
    <div className="treelist">
      <h3><Link to={tagPagePath}> {tagName} </Link></h3>
      <p>{tagDesc}</p>
      {tag ? <ul className="ultree" id={tag}>
      </ul> : null}
    </div>
  );
}
