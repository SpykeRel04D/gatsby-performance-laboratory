import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
  <>
    <ul>
      <li>
        <Link to="/scroll-tracking/tracking-01">Label</Link>
        <p>
          <i>Description</i>
        </p>
      </li>
    </ul>
  </>
);

export default IndexPage;