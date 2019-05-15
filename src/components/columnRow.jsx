import React from 'react';

export default ({ info, type }) => {
  const renderColumns = () => {
    if (type === 'large') {
      return (
        <div className="row-large__container">
          <img className="row-large__image" src={info[0].url} alt="Url" />
          <p className="row-large__title">{ info[0].title }</p>
          <p className="row-large__text">{ info[0].text }</p>
        </div>
      );
    } else if (type === 'video') {
      return (
        <div className="row-video__container">
          <img className="row-video__image" src={info[0].url} alt="Url" />
          <p className="row-video__title">{ info[0].title }</p>
        </div>
      );
    }
    return info.map((x) => {
      if (x.url) {
        return (
          <div className="row-small__container">
            <img className="row-small__image" src={x.url} alt="Url" />
            <p className="row-small__title">{ x.title }</p>
          </div>
        );
      }
      return (
        <div className="row-small__container">
          <p className="row-small__title">{ x.title }</p>
        </div>
      );
    });
  };
  return (
    <div className={`row-${type}`}>
      { renderColumns() }
    </div>
  );
};
