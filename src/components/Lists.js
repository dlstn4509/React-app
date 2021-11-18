import React, { useCallback } from 'react';

const Lists = ({ lists }) => {
  return (
    <ul>
      {lists.map((v, i) => (
        <li key={i}>
          {/* <img src={v.thumbnail_url} alt="img" className="w-100" /> */}
          <img src={v.image_url} alt="img" className="w-100" />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Lists);
