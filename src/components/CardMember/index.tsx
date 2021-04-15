import React from 'react';
// import { Link } from 'react-router-dom';

import './styles.css';

export interface CardMemberProps {
img?: string;
imgSide?: 'left' | 'right';
imgAlt?: string;
name?: string;
job?: string;
url?: string;
}

export const CardMember: React.FC<CardMemberProps> = ({
  img, // images must be squares
  imgSide = '',
  imgAlt = '',
  name,
  job,
  url,
  children
  }) => {
  return (
  <div className="card cardMember my-4 border-0">
    <div className="row no-gutters">

      {img && imgSide === 'left' ? <div className="col-sm-3 col-md-4 d-flex align-items-center justify-content-center">
        <img className="card-img" src={img} alt={imgAlt} title={imgAlt} />
      </div> : null}

      {img && imgSide === 'right' ? <div className="col-sm-3 col-md-4 d-flex align-items-center justify-content-center order-sm-2">
        <img className="card-img" src={img} alt={imgAlt} title={imgAlt} />
      </div> : null}

      <div className="col-sm-9 col-md-8">
        <div className="card-body">
          {name ? <h5 className="card-title">{name}</h5> : null}
          {job ? <p className="card-text">
            <small className="text-muted">{job}</small>
          </p> : null}
          <p className="card-text">{children}</p>
          {url ? <p className="card-text">
            <a className="card-link" href={url}>Page personnelle</a>
          </p> : null}
        </div>
      </div>

    </div>
  </div>
  );
}
