import React from 'react';
import BasicLayout from '../../layouts/Basic';

import TrackerWithHook from '../../components/TrackerWithHook';

const Tracking01 = () => {
  return (
    <BasicLayout withContent insideHeader={<TrackerWithHook />}></BasicLayout>
  );
};

export default Tracking01;
