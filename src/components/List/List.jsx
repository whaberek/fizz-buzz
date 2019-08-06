import React, { useState } from 'react';

import { Button, ListItem } from 'components';

import { texts } from 'shared/constants';

const List = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const _paginate = (array, page) => array.slice(20 * (page - 1), 20 * page);

  let paginateItems = _paginate(data, currentPage);

  const _nextPage = () => {
    setCurrentPage(currentPage + 1);
    paginateItems = _paginate(data, currentPage);
  };

  const _previousPage = () => {
    setCurrentPage(currentPage - 1);
    paginateItems = _paginate(data, currentPage);
  };

  const _keyExtractor = (item, index) => `${item.props.children}_${index}`;

  return (
    <>
      <>
        <Button type="button" onClick={_previousPage} label={texts.previous}/>
        <Button type="button" onClick={_nextPage} label={texts.next}/>
      </>
      {
        paginateItems.map((item, index) => (
          <ListItem key={_keyExtractor(item, index)}>{item}</ListItem>
        ))
      }
    </>
  );
};

export { List };
