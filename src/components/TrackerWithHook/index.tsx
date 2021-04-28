import React, { useState, useRef, useMemo } from 'react';
import useScrollPosition from '../../custom-hooks/useScrollPosition';

import { Container } from './styles';

const TrackerWithHook = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [top, setTop] = useState(true);
  const rendersCount = useRef(0);

  const designedSize = 80;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      console.log(currPos.y);
      //if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      currPos.y <= -designedSize ? setTop(false) : setTop(true);
    },
    [hideOnScroll],
    null,
    false,
    300
  );

  return useMemo(
    () => (
      <Container className={`${top ? 'expanded' : 'collapsed'}`}>
        <div>
          <b>Tracker With Hook</b>
        </div>
        <div className="counter">RENDER COUNT: {++rendersCount.current}</div>
      </Container>
    ),
    [top]
  );
};

export default TrackerWithHook;
