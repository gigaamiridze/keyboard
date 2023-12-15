import styled, { css } from 'styled-components';
import { IStyledFlexBoxProps } from '../../models';

const StyledFlexBox = styled.div<IStyledFlexBoxProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent, flexWrap, gap, rowGap, columnGap }) => css`
    flex-direction: ${flexDirection || 'row'};
    align-items: ${alignItems || 'stretch'};
    justify-content: ${justifyContent || 'flex-start'};
    flex-wrap: ${flexWrap || 'nowrap'};
    gap: ${gap ? `${gap}px` : null};
    row-gap: ${rowGap ? `${rowGap}px` : null};
    column-gap: ${columnGap ? `${columnGap}px` : null};
  `}
`;

export default StyledFlexBox;
