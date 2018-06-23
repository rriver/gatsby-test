import React from "react";
import Link from "gatsby-link";

export default () =>
  <div>
    <h1 style={{ color: `tomato` }}>Gatsby to Netlify Deploy Test!</h1>
    <p>Testing GatsbyJS to see if it makes sense to use it.</p>
    <p>I am not sure if I need to buid on the local env first to have it deployed. Turned out I don't.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <ul>
      <li><Link to="/page-2/">Page 2</Link></li>
      <li><Link to="/page-3/">Page 3</Link></li>
      <li><Link to="/counter/">Counter</Link></li>
    </ul>
  </div>
