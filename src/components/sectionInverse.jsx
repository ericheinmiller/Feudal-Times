import React from 'react';
import ColumnRow from './columnRow';

export default () => {
  return (
    <div className="section inverse">
      <h1 className="text-video-title">Videos</h1>
      <div className="section-container">
        <div className="column column-small responsive-768">
          <div className="video-links">
            <p className="video-links__title">Video Links</p>
          </div>
          <ColumnRow type="video" info={[{ title: 'West Francia: new power in Europe?', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Europe_814.svg/1920px-Europe_814.svg.png' }]} />
          <ColumnRow type="video" info={[{ title: 'West Francia: new power in Europe?', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Europe_814.svg/1920px-Europe_814.svg.png' }]} />
          <ColumnRow type="video" info={[{ title: 'West Francia: new power in Europe?', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Europe_814.svg/1920px-Europe_814.svg.png' }]} />
        </div>
        <iframe title="film" width="560" height="315" src="https://www.youtube.com/embed/WeVcey0Ng-w" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </div>
  );
};
