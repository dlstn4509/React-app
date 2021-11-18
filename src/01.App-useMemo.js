import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Title from './components/Title';

const App = () => {
  const photoURL = 'https://dapi.kakao.com/v2/search/imagephotos';
  const headerTitle = '박보영만 검색할 수 있는 검색기';
  const subTitle = 'feat. kakao';
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(
    async (value) => {
      setAllPhoto([...allPhoto, value]);
    },
    [setAllPhoto, allPhoto]
  );

  // Computed
  const genCount = (photo) => {
    console.log('hihihi');
    return photo.length + '개 입니다.';
  };
  const listCount = useMemo(() => genCount(searchPhoto), [searchPhoto]);

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
      <div>{listCount}</div>
    </div>
  );
};

export default React.memo(App);
