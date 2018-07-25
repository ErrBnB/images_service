import React from 'react';

const ListEntry = (props) => {
  return (
      <div className = "per-list-entry">
        <li>
            <img src={props.image.url} height="200" width="200"/>{props.image.description}
        </li>
      </div>
  )
};

export default ListEntry;
