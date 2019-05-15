import React from 'react';
import ColumnRow from './columnRow';

export default () => {
  return (
    <div className="section">
      <div className="section-container">
        <div className="column column-small">
          <ColumnRow type="small" info={[{ title: 'West Francia: new power in Europe?', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Europe_814.svg/1920px-Europe_814.svg.png' }]} />
          <ColumnRow type="small" info={[{ title: 'Tang Empire, the Romans of the East?', url: 'https://www.tripchinaguide.com/public/upload/photo/tang-dynasty/img_251_d20131015095135.jpg' }]} />
        </div>
        <div className="column column-large">
          <ColumnRow type="large" info={[{ title: 'Secrets Of Immortality', url: 'https://ichef.bbci.co.uk/images/ic/640x360/p01gn27w.jpg', text: 'Despite the continued effort of countless alchemists, one thing has always eluded them. Immortality. While the effort to transform lead to gold is underway, a young philosopher in Burgundy believes he has the answer' }]} />
        </div>
        <div className="column column-small responsive-1024">
          <ColumnRow type="small" info={[{ title: 'Ancient Roman Secrets: How to be immortal.' }]} />
          <ColumnRow type="small" info={[{ title: 'Do all Roads lead to Rome? Visigoths say no' }]} />
          <ColumnRow type="small" info={[{ title: 'Atlantis, did it actually exist? These monks believe so' }]} />
          <ColumnRow type="small" info={[{ title: 'Feudalism and You. How to manage your Lords estate' }]} />
          <ColumnRow type="small" info={[{ title: 'Pottage: Food that Fuels. How to maximize your vegatables' }]} />
          <ColumnRow type="small" info={[{ title: 'Christians call onto Castille for help against the Caliphate' }]} />
          <ColumnRow type="small" info={[{ title: 'Holy Land: Jerusalem, worth crusading for?' }]} />
        </div>
      </div>
    </div>
  );
};
