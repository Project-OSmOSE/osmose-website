import React from 'react';
// import { Link } from 'react-router-dom';
import { TreeListItem } from '../TreeListItem';
import './styles.css';

export interface TreeListProps {
  tagObject: any;
}

// return an array of <TreeListItem> or an empty array
// verify null value
function createItems(childrenTags: Array<string>){
  let itemList: Array<any> = [];
  if(childrenTags !== null){
    itemList = childrenTags.map((value) => <TreeListItem tagTitle={value} />)
  }
  return itemList;
}

export const TreeList: React.FC<TreeListProps> = (tagObject: any) => {
  return (
    <div className="treelist" id={tagObject.engName + "-treelist"}>
      <ul>
        {createItems(tagObject.childrenTag)}
      </ul>
    </div>
  );
}
