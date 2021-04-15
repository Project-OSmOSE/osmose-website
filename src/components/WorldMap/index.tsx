import React from 'react';

import './styles.css';

export interface WorldMapProps {
  title?: string;
  titlelink?: string;
}

export const WorldMap: React.FC<WorldMapProps> = ({
  title,
  titlelink,
  children
}) => {
  return (
    <div className="worldmap">
      <div className="container">
        <h3>Localisation</h3>
      </div>

      <div className="container-fluid my-3 map">

      </div>

      <div className="container-fluid my-3 d-flex justify-content-between align-items-stretch infos">

        <div className="list">
          <h3>List</h3>
          <div>
          {/* List of datasets */}
          </div>
        </div>

        <div className="metadata">
          <h3>MetaData</h3>
          <div>

          </div>
        </div>
      </div>

    </div>
  );
}
