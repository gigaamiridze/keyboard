import styled, { css } from 'styled-components';
import { IKeyboardStylesProp } from '../../models';

export const InputContainer = styled.div<IKeyboardStylesProp>`
  ${({ styles }) => css`
    width: ${styles.input.width ? `${styles.input.width}px` : '100%'};
    height: ${styles.input.height ? styles.input.height : styles.keyButton.height}px;
    border-radius: ${styles.input.borderRadius ? `${styles.input.borderRadius}px` : null};
    ${styles.input.borderWidth && styles.input.borderColor && css`
      border: ${styles.input.borderWidth}px solid ${styles.input.borderColor};
    `}
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledKeyboardInput = styled.input<IKeyboardStylesProp>`
  ${({ styles }) => css`
    width: ${styles.input.leftIcon || styles.input.rightIcon ? '80px' : '100%'};
    height: 100%;
    font-size: ${styles.input.fontSize}px;
    font-family: ${styles.keyButton.fontFamily};
    color: ${styles.input.color};
    text-align: center;
  `}
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
`;
