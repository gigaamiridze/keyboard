import styled, { css } from 'styled-components';
import { ActionButtonType } from '../../types';
import { IButtonProps } from '../../models';
import { Colors } from '../../constants';

export const Button = styled.button<IButtonProps>`
  ${({ styles, type, isNumericDotMode, isActive }) => css`
    width: ${styles.keyButton.regular.width}px;
    height: ${styles.keyButton.height}px;
    background-color: ${styles.keyButton.regular.backgroundColor};
    color: ${styles.keyButton.regular.color};
    font-size: ${styles.keyButton.fontSize}px;
    font-family: ${styles.keyButton.fontFamily};
    font-weight: ${styles.keyButton.fontWeight};
    border-radius: ${styles.keyButton.regular.borderRadius === 'circle' ? '50%' : `${styles.keyButton.regular.borderRadius}px`};

    ${type === ActionButtonType.SHIFT && css`
      width: ${styles.keyButton.shift?.width}px;
      background-color: ${styles.keyButton.shift?.backgroundColor};
      color: ${styles.keyButton.shift?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${type === ActionButtonType.SYMBOL && css`
      width: ${styles.keyButton.symbol?.width}px;
      background-color: ${styles.keyButton.symbol?.backgroundColor};
      color: ${styles.keyButton.symbol?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${type === ActionButtonType.LANGUAGE && css`
      width: ${styles.keyButton.language?.width}px;
      background-color: ${styles.keyButton.language?.backgroundColor};
      color: ${styles.keyButton.language?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${type === ActionButtonType.SPACE && css`
      width: ${styles.keyButton.space?.width}px;
      background-color: ${styles.keyButton.space?.backgroundColor};
      color: ${styles.keyButton.space?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${type === ActionButtonType.CLEAN && css`
      width: ${styles.keyButton.clean?.width}px;
      background-color: ${styles.keyButton.clean?.backgroundColor};
      color: ${styles.keyButton.clean?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${type === ActionButtonType.DELETE && css`
      width: ${isNumericDotMode ? styles.keyButton.regular?.width : styles.keyButton.delete?.width}px;
      background-color: ${styles.keyButton.delete?.backgroundColor};
      color: ${styles.keyButton.delete?.color};
      border-radius: ${styles.keyButton.action.borderRadius === 'circle' ? '50%' : `${styles.keyButton.action.borderRadius}px`};
    `}

    ${isActive && css`
      transform: translateY(1px);
      background-color: ${Colors.GRAY};
      transform: scale(0.98);
    `}

    &:active {
      color: ${styles.keyButton.pressedTitleColor};
      background-color: ${styles.keyButton.pressedBgColor};
      transform: scale(0.98);

      svg {
        fill: ${styles.keyButton.pressedTitleColor};
      }
    }
  `}
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;

  svg {
    transition: all 0.2s ease;
  }
`;

export default Button;