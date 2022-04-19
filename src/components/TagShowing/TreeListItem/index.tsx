import React from 'react';
// import { TreeList } from '../TreeList';
// import { Link } from 'react-router-dom';
import './styles.css';

export interface TreeListItemProps {
  tagTitle: string;
}

export const TreeListItem: React.FC<TreeListItemProps> = (tagTitle) => {

  return (
    <li className="treelistitem" id={tagTitle + "-treelistitem"}>
      {tagTitle}
    </li>
  );
}
