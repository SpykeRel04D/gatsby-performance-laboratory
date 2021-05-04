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

const Rendering03 = () => {
  return (
    <BasicLayout>
      <Container>
        <svg>
          <path className="svg blue" />
        </svg>
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

export default Rendering03;
