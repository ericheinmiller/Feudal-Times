import React, { useState, useEffect } from 'react';
import Hamburger from '../images/hamburger.svg';
import Search from '../images/Magnifying_glass_icon.svg';
import Modal from './modal';

export default ({ setModalStatus, modalStatus }) => {
  const [navbarClass, setNavbarClass] = useState('navbar__container-upper');

  const handleHamburgerClick = () => {
    if (modalStatus === 'modal modal--active') {
      setModalStatus('modal');
    } else {
      setModalStatus('modal modal--active');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        setNavbarClass('navbar__container-upper navbar__container-upper--collapse');
      } else {
        setNavbarClass('navbar__container-upper');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className={navbarClass}>
        <h4 className="text-newsletter">Sign up for our newsletters!</h4>
        <h1 className="text-title">FEUDAL TIME</h1>
        <p className="text-subscribe">Subscribe</p>
      </div>
      <div className="navbar__container-lower">
        <div onClick={() => handleHamburgerClick()} role="button">
          <img src={Hamburger} className="icon-hamburger" alt="Hamburger Icon" />
          <Modal modalStatus={modalStatus} />
        </div>
        <h4 className="text-small">Feudal Time</h4>
        <div className="text-links">
          <p>County</p>
          <p>Lords</p>
          <p>Europe</p>
          <p>Ideas</p>
          <p>Health</p>
          <p>Jesters</p>
          <p>Alchemy</p>
          <p>Bartering</p>
        </div>
        <img className="icon-search" src={Search} alt="Search Icon" />
      </div>
    </div>
  );
};
