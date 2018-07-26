import React from 'react';

const ListEntry = (props) => {
  return (
    <li>
        <img className="picture-gallery" onClick={props.clickImage} src={props.image.url} width="250" />
        <br></br>
        {props.image.description}
    </li>
  )
};

export default ListEntry;