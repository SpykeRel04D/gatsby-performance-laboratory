import React from 'react';
import styled from 'styled-components';
import BasicLayout from '../../layouts/Basic';

import easel from '../../ui/svgs/easel.svg';
import palette from '../../ui/svgs/palette.svg';
import globe from '../../ui/svgs/globe.svg';
import mandala from '../../ui/svgs/mandala.svg';

import { rems } from '../../ui/helpers';

const Container = styled.div`
  margin: ${rems(75)} auto;
  text-align: center;

  .svg {
    height: ${rems(500)};
    width: ${rems(500)};
  }

  .blue {
    filter: invert(8%) sepia(100%) saturate(7038%) hue-rotate(248deg)
      brightness(101%) contrast(145%);
  }

  .red {
    filter: invert(28%) sepia(94%) saturate(6881%) hue-rotate(356deg)
      brightness(96%) contrast(125%);
  }

  .violet {
    filter: invert(86%) sepia(21%) saturate(5356%) hue-rotate(245deg)
      brightness(95%) contrast(96%);
  }
`;

const Rendering02 = () => {
  return (
    <BasicLayout>
      <Container>
        <img src={easel} className="svg blue" />
      </Container>
      <Container>
        <img src={palette} className="svg blue" />
      </Container>
      <Container>
        <img src={globe} className="svg red" />
      </Container>
      <Container>
        <img src={mandala} className="svg violet" />
      </Container>
    </BasicLayout>
  );
};

export default Rendering02;
