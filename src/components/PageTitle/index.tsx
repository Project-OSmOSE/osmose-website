import React from 'react';
// import { Link } from 'react-router-dom';

import './styles.css';

export interface PageTitleProps {
  title?: string;
  img?: string;
  imgAlt?: string;
  imgSet?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  img,
  imgAlt,
  imgSet,
  children
}) => {
  return (
    <header className="PageTitle mb-5">
      <img className="card-img-top" alt={imgAlt}  title={imgAlt} src={img}
      srcSet={imgSet}
      // srcset="imagePath_400.webp 400w, imagePath_640.webp 640w"
      />
      <div className="overlay d-flex justify-content-center">
        <h1 className="align-self-center">{title}</h1>
      </div>
    </header>
  );
}
