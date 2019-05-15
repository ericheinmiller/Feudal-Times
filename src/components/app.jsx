import React, { useState } from 'react';
import Navbar from './navbar';
import SectionMain from './sectionMain';
import SectionInverse from './sectionInverse';
import SectionNext from './sectionNext';

export default () => {
  const [modalStatus, setModalStatus] = useState('modal');

  return (
    <div className="homepage">
      <div className={modalStatus} />
      <Navbar modalStatus={modalStatus} setModalStatus={setModalStatus} />
      <SectionMain />
      <SectionInverse />
      <SectionNext />
    </div>
  );
};
