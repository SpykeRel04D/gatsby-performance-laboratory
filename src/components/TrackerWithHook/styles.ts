import styled from 'styled-components';

import { getRatio, space, media } from '../../ui/helpers';

const Container = styled.header`
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  border-bottom: 8px solid violet;
  font-size: 34px;
  font-weight: 500;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  min-height: ${space(10)};

  &.expanded {
    transform: translateY(0);
    transition: 0.35s;
  }
  &.collapsed {
    transform: translateY(-20px);
    transition: 0.35s;
  }

  .counter {
    margin-left: 30px;
    font-size: 18px;
    font-weight: 300;
  }
`;

export { Container };
