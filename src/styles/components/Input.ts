import styled, { css } from 'styled-components';
import { IKeyboardStylesProp } from '../../models';

export const StyledKeyboardInput = styled.input<IKeyboardStylesProp>`
  ${({ styles }) => css`
    width: ${styles.keyboardInput.leftIcon || styles.keyboardInput.rightIcon ? '80px' : '100%'};
    font-size: ${styles.keyboardInput.fontSize}px;
    font-family: ${styles.keyButton.fontFamily};
    color: ${styles.keyboardInput.color};
    text-align: ${styles.keyboardInput.leftIcon || styles?.keyboardInput.rightIcon ? 'center' : 'left'};
  `}
  background-color: transparent;
  padding: 0 10px;
  border: none;
  outline: none;
  resize: none;
`;

export const InputContainer = styled.div<IKeyboardStylesProp>`
  ${({ styles }) => css`
    width: ${styles.keyboardInput.width}px;
    height: ${styles.keyButton.height}px;
    border-radius: ${styles.keyboardInput.borderRadius}px;
    border: ${styles.keyboardInput.borderWidth}px solid ${styles.keyboardInput.borderColor};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;
