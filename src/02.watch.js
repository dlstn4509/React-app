import '../scss/Search.scss';
import React, { useRef, useState, useCallback } from 'react';

const Search = ({ changeQuery }) => {
  const placeholder = '박보영';
  const queryRef = useRef(null);
  const [query, setQuery] = useState('');
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      changeQuery(queryRef.current.value);
    },
    [changeQuery]
  );

  const onClick = useCallback(
    (e) => {
      setQuery('');
      changeQuery('');
    },
    [setQuery, changeQuery]
  );

  const onChange = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  // useEffect(() => {
  //   changeQuery(query);
  // }, [query]);
  return (
    <form className="search-wrapper" onSubmit={onSubmit}>
      <div className="search-wrap mr-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder={placeholder}
          autoFocus
          name="query"
          ref={queryRef}
          onChange={onChange}
          value={query}
        />
        {query.length ? (
          <i className="fa fa-times-circle bt-remove" onClick={onClick} />
        ) : (
          ''
        )}
      </div>
      <button className="btn btn-warning btn-lg bt-submit">검색</button>
    </form>
  );
};

export default React.memo(Search);
