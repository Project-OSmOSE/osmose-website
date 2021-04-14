import { Url, UrlObject } from 'node:url';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export interface TreeListProps {
  title?: string;
  titlelink?: string;
  color?: string;
}

export const TreeList: React.FC<TreeListProps> = ({
  title,
  titlelink,
  color,
  children
}) => {
  return (
    <div className="treelist">
      <h3><a href={titlelink}>{title}</a></h3>
      {/* children structure must be ul & li */}
      {children}
    </div>
  );
}
