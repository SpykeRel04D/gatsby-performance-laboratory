import styled from "styled-components"

const ImageWrapper = styled.div<{
  ratio: number
}>`
  position: relative;
  overflow: hidden;
  &:after {
    display: block;
    content: "";
    padding-bottom: ${({ ratio }) => `${100 / ratio}%`};
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`
