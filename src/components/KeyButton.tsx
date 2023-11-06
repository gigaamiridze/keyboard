import styled, { css } from 'styled-components';
import { IKeyButtonProps } from '../interfaces';
import { Colors } from '../constants';

const KeyButton = styled.button<IKeyButtonProps>`
  ${({ styles, isSymbolActive, isShiftActive, isShift, isSymbol, isLanguage, isSpace, isClean, isDelete, isUppercase }) => css`
    width: ${styles?.keyButton.default.width}px;
    height: ${styles?.keyButton.default.height}px;
    background-color: ${styles?.keyButton.default.backgroundColor};
    color: ${styles?.keyButton.default.color};
    font-weight: ${styles?.keyButton.default.fontWeight};
    font-size: ${styles?.keyButton.default.fontSize}px;
    border-radius: ${styles?.keyButton.default.borderRadius}px;
    text-transform: ${isUppercase && 'uppercase'};

    ${isShift && css`
      width: ${styles?.keyButton.shift?.width}px;
      background-color: ${styles?.keyButton.shift?.backgroundColor};
      color: ${styles?.keyButton.shift?.color};
    `}

    ${isSymbol && css`
      width: ${styles?.keyButton.symbol?.width}px;
      background-color: ${styles?.keyButton.symbol?.backgroundColor};
      color: ${styles?.keyButton.symbol?.color};
    `}

    ${isLanguage && css`
      width: ${styles?.keyButton.language?.width}px;
      background-color: ${styles?.keyButton.language?.backgroundColor};
      color: ${styles?.keyButton.language?.color};
    `}

    ${isSpace && css`
      width: ${styles?.keyButton.space?.width}px;
      background-color: ${styles?.keyButton.space?.backgroundColor};
      color: ${styles?.keyButton.space?.color};
    `}

    ${isClean && css`
      width: ${styles?.keyButton.clean?.width}px;
      background-color: ${styles?.keyButton.clean?.backgroundColor};
      color: ${styles?.keyButton.clean?.color};
    `}

    ${isDelete && css`
      width: ${styles?.keyButton.delete?.width}px;
      background-color: ${styles?.keyButton.delete?.backgroundColor};
      color: ${styles?.keyButton.delete?.color};
    `}

    ${(isShiftActive && isShift) || (isSymbolActive && isSymbol) ? css`
      transform: translateY(1px);
      background-color: ${Colors.DARK_GRAY};
      box-shadow: 0px 0px 10px -5px ${Colors.BLACK};
    ` : null
    }
  `}
  font-family: 'Trebuchet MS', sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  &:active {
    transform: translateY(1px);
    background-color: ${Colors.DARK_GRAY};
    box-shadow: 0px 0px 10px -5px ${Colors.BLACK};
  }

  svg {
    fill: ${({ styles }) => styles?.keyButton.delete?.color};
  }
`;

export default KeyButton;
