import React from 'react';
import BasicLayout from '../../layouts/Basic';

import TrackerWithScrollTo from '../../components/TrackerWithScrollTo';

const Tracking02 = () => {
  return (
    <BasicLayout
      withContent
      insideHeader={<TrackerWithScrollTo />}
    ></BasicLayout>
  );
};

export default Tracking02;
