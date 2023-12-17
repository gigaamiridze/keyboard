import styled, { css } from 'styled-components';
import { IUnderscoreProps } from '../../models';

const Underscore = styled.p<IUnderscoreProps>`
  ${({ color, fontSize, fontFamily }) => css`
    color: ${color};
    font-size: ${fontSize}px;
    font-family: ${fontFamily};
  `}
`;

export default Underscore;
