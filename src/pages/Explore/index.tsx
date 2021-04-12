import React from 'react';
import { PageTitle } from '../../components/PageTitle';

import './styles.css';
import imgBanner from '../../images/maxresdefault.jpg';

export const Explore: React.FC = () => {
return (
<div className="explore">

  <PageTitle title="Explore" img={imgBanner} imgAlt="Explore Banner" imgSet="">
  </PageTitle>

</div>
);
}
