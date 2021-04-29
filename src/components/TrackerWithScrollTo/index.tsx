import React, { useState, useRef, useMemo, useEffect } from 'react';

import { Container } from './styles';

const TrackerWithScrollTo = () => {
  const [top, setTop] = useState(true);
  const rendersCount = useRef(0);
  const designedSize = 80;

  useEffect(() => {
    const onScroll = e => {
      e.target.documentElement.scrollTop > designedSize
        ? setTop(false)
        : setTop(true);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return useMemo(
    () => (
      <Container className={`${top ? 'expanded' : 'collapsed'}`}>
        <div>
          <b>Tracker With scrollTo</b>
        </div>
        <div className="counter">RENDER COUNT: {++rendersCount.current}</div>
      </Container>
    ),
    [top]
  );
};

export default TrackerWithScrollTo;
