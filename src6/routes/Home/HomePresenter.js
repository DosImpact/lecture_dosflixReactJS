import React from "react";

export default ({ movies }) => (
  <>
    {movies &&
      movies.length > 0 &&
      movies.map(element => (
        <div key={element.id}>{element.original_title}</div>
      ))}
  </>
);
