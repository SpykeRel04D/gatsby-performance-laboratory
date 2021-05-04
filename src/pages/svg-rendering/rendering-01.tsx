import React from 'react';
import styled from 'styled-components';
import BasicLayout from '../../layouts/Basic';

import Easel from '../../ui/svgs/easel.svg';
import Palette from '../../ui/svgs/palette.svg';
import Globe from '../../ui/svgs/globe.svg';
import Mandala from '../../ui/svgs/mandala.svg';

import { rems } from '../../ui/helpers';

const Container = styled.div`
  margin: ${rems(75)} auto;
  text-align: center;

  .svg {
    height: ${rems(500)};
    width: ${rems(500)};
  }

  .blue {
    path {
      fill: blue;
    }
  }

  .red {
    path {
      fill: red;
    }
  }

  .violet {
    path {
      fill: violet;
    }
  }
`;

const Rendering01 = () => {
  return (
    <BasicLayout>
      <Container>
        <Easel className="svg blue" />
      </Container>
      <Container>
        <Palette className="svg" />
      </Container>
      <Container>
        <Globe className="svg red" />
      </Container>
      <Container>
        <Mandala className="svg violet" />
      </Container>
    </BasicLayout>
  );
};

export default Rendering01;
