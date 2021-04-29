import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
  <>
    <ul>
      <li>
        <Link to="/scroll-tracking/tracking-01">Tracker With Hook</Link>
        <p>
          <i>
            In this page we are using a custom hook called "useScrollPosition".
            Also, we are using the "useMemo" hook.
          </i>
        </p>
      </li>
    </ul>
  </>
);

export default IndexPage;
