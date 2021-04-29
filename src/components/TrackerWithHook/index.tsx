import React, { useState, useRef, useMemo } from 'react';
import useScrollPosition from '../../custom-hooks/useScrollPosition';

import { Container } from './styles';

const TrackerWithHook = () => {
  const [top, setTop] = useState(true);
  const rendersCount = useRef(0);

  const designedSize = 80;

  useScrollPosition(
    ({ currPos }) => {
      currPos.y <= -designedSize ? setTop(false) : setTop(true);
    },
    [top],
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
