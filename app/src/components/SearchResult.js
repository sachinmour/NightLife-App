import React from "react";

const SearchResult = ({places}) => {
  return (
    <ul className="list-group">
      {places.map((note, index) => {
        return <li className="list-group-item" key={index}>{note}</li>;
      })}
    </ul>
  );
};

export default SearchResult;