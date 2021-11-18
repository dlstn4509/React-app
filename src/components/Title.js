import React from 'react';
import '../scss/Title.scss';

const Title = ({ title, subTitle }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">
        <i className="icon fa fa-image"></i>
        {title}
        <small className="ml-3">{subTitle}</small>
      </h1>
    </div>
  );
};

export default React.memo(Title);
