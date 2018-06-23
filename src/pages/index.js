import React from "react";
import Link from "gatsby-link";

export default () =>
  <div>
    <h1 style={{ color: `tomato` }}>Hello Gatsby!</h1>
    <p>This is the first project.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <ul>
      <li><Link to="/page-2/">Page 2</Link></li>
      <li><Link to="/page-3/">Page 3</Link></li>
      <li><Link to="/counter/">Counter</Link></li>
    </ul>
  </div>
