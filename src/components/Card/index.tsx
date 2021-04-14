import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export interface CardProps {
  title?: string;
  img?: string;
  imgSide?: 'left' | 'right';
  imgAlt?: string;
  subtitle?: string;
  url?: string;
  urlDesc?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  img, // images should have 4:3 ratio
  imgSide = 'left',
  imgAlt = '',
  subtitle,
  url,
  urlDesc,
  children
}) => {
  return (
  <div className="container-fluid">
  {title ? <h2>{title}</h2> : null}
  <div className="card genericCard my-3 border-0">
    <div className="row no-gutters">

      {img && imgSide === 'left' ? <div className="col-md-4 d-flex align-items-center justify-content-center">
        <img className="card-img shadow" src={img} alt={imgAlt} title={imgAlt} />
      </div> : null}

      {img && imgSide === 'right' ? <div className="col-md-4 d-flex align-items-center justify-content-center order-sm-2">
        <img className="card-img shadow" src={img} alt={imgAlt} title={imgAlt} />
      </div> : null}

      <div className="col-md-8">
        <div className="card-body">
          {subtitle ? <h4 className="card-title">{subtitle}</h4> : null}
          <p className="card-text">{children}</p>
          {url ? <p className="card-text">
            <Link className="card-link" to={url}>{urlDesc}</Link>
          </p> : null}
        </div>
      </div>

    </div>
  </div>
</div>
);
}
