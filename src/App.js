import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Title from './components/Title';
import Lists from './components/Lists';

const kakaoURL = 'https://dapi.kakao.com/v2/search/image';
const kakaoKey = 'KakaoAK accdfd5267af756d07efcd007e13bcee';
const kakaoParams = {
  params: { size: 50 },
  headers: { Authorization: kakaoKey },
};
const headerTitle = '박보영만 검색할 수 있는 검색기';
const subTitle = 'feat. kakao';

const App = () => {
  const [allPhoto, setAllPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState([]);

  const changeQuery = useCallback(async (value) => {
    try {
      kakaoParams.params.query = value;
      const { data } = await axios.get(kakaoURL, kakaoParams);
      setAllPhoto(data.documents);
      setSearchPhoto(data.documents);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="container">
      <Title title={headerTitle} subTitle={subTitle} />
      <Search changeQuery={changeQuery} />
      <Lists lists={searchPhoto} />
    </div>
  );
};

export default React.memo(App);
