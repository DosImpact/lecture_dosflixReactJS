import React from "react";

export default ({ loading, blogName, blogPost }) => (
  <div>
    {loading ? (
      "loading..."
    ) : (
      <>
        <div>{`complete!! ${blogName}`}</div>
        <div>
          <ul>
            {blogPost.posts.map((e, idx) => (
              <li key={idx}>{e.title}</li>
            ))}
          </ul>
        </div>
        <ul></ul>
      </>
    )}
  </div>
);
