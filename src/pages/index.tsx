import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => (
  <>
    <ul>
      <h2>Scroll Tracking</h2>
      <li>
        <Link to="/scroll-tracking/tracking-01">Tracker With Hook</Link>
        <p>
          <i>
            In this page we are using a custom hook called "useScrollPosition".
            Also, we are using the "useMemo" hook.
          </i>
        </p>
      </li>
      <li>
        <Link to="/scroll-tracking/tracking-02">Tracker With ScrollTo</Link>
        <p>
          <i>
            In this page we are using browser default ScrollTo". Also, we are
            using the "useMemo" hook.
          </i>
        </p>
      </li>
      <h2>SVG Rendering</h2>
      <li>
        <Link to="/svg-rendering/rendering-01">Render SVG with svgr</Link>
        <p>
          <i>
            In this page we are rendering svg's using SVRG (basically, svg's are
            treated like react components)
          </i>
        </p>
      </li>
    </ul>
  </>
);

export default IndexPage;
