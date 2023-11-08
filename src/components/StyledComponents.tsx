import styled, { css } from 'styled-components';
import { IKeyboardStyles } from '../interfaces';
import { ActionButtonType, Colors } from '../constants';

// Button
interface IButtonProps {
  type?: ActionButtonType;
  isNumericMode?: boolean;
  isActive?: boolean;
  styles?: IKeyboardStyles;
}

export const Button = styled.button<IButtonProps>`
  ${({ styles, type, isNumericMode, isActive }) => css`
    width: ${styles?.keyButton.regular.width}px;
    height: ${styles?.keyButton.regular.height}px;
    background-color: ${styles?.keyButton.regular.backgroundColor};
    color: ${styles?.keyButton.regular.color};
    font-weight: ${styles?.keyButton.regular.fontWeight};
    font-size: ${styles?.keyButton.regular.fontSize}px;
    border-radius: ${styles?.keyButton.regular.borderRadius}px;

    ${type === ActionButtonType.SHIFT && css`
      width: ${styles?.keyButton.shift?.width}px;
      background-color: ${styles?.keyButton.shift?.backgroundColor};
      color: ${styles?.keyButton.shift?.color};
    `}

    ${type === ActionButtonType.SYMBOL && css`
      width: ${styles?.keyButton.symbol?.width}px;
      background-color: ${styles?.keyButton.symbol?.backgroundColor};
      color: ${styles?.keyButton.symbol?.color};
    `}

    ${type === ActionButtonType.LANGUAGE && css`
      width: ${styles?.keyButton.language?.width}px;
      background-color: ${styles?.keyButton.language?.backgroundColor};
      color: ${styles?.keyButton.language?.color};
    `}

    ${type === ActionButtonType.SPACE && css`
      width: ${styles?.keyButton.space?.width}px;
      background-color: ${styles?.keyButton.space?.backgroundColor};
      color: ${styles?.keyButton.space?.color};
    `}

    ${type === ActionButtonType.CLEAN && css`
      width: ${styles?.keyButton.clean?.width}px;
      background-color: ${styles?.keyButton.clean?.backgroundColor};
      color: ${styles?.keyButton.clean?.color};
    `}

    ${type === ActionButtonType.DELETE && css`
      width: ${isNumericMode ? styles?.keyButton.regular?.width : styles?.keyButton.delete?.width}px;
      background-color: ${styles?.keyButton.delete?.backgroundColor};
      color: ${styles?.keyButton.delete?.color};
    `}

    ${isActive && css`
      transform: translateY(1px);
      background-color: ${Colors.DARK_GRAY};
      box-shadow: 0px 0px 10px -5px ${Colors.BLACK};
    `}
  `}

  font-family: 'Trebuchet MS', sans-serif;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;

  &:active {
    transform: translateY(1px);
    background-color: ${Colors.DARK_GRAY};
    box-shadow: 0px 0px 10px -5px ${Colors.BLACK};
  }
`;

// FlexBox
interface IFlexBoxProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
  alignItems?: 'stretch' | 'center' | 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'initial' | 'inherit';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial';
  gap?: number | 'normal' | 'initial' | 'inherit';
  rowGap?: number | 'normal' | 'initial' | 'inherit';
  columnGap?: number | 'normal' | 'initial' | 'inherit';
}

export const FlexBox = styled.div<IFlexBoxProps>`
  display: flex;
  ${({ flexDirection, alignItems, justifyContent, flexWrap, gap, rowGap, columnGap }) => css`
    flex-direction: ${flexDirection || 'row'};
    align-items: ${alignItems || 'stretch'};
    justify-content: ${justifyContent || 'flex-start'};
    flex-wrap: ${flexWrap || 'nowrap'};
    gap: ${gap ? `${gap}px` : 0};
    row-gap: ${rowGap ? `${rowGap}px` : 0};
    column-gap: ${columnGap ? `${columnGap}px` : 0};
  `}
`;

// KeyboardInput
export const InputContainer = styled.div<{ styles?: IKeyboardStyles }>`
  ${({ styles }) => css`
    width: ${styles?.keyboardInput.width}px;
    height: ${styles?.keyButton.regular.height}px;
    border-radius: ${styles?.keyButton.regular.borderRadius}px;
    border: ${styles?.keyboardInput.borderWidth}px solid ${styles?.keyboardInput.borderColor};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledKeyboardInput = styled.input<{ styles?: IKeyboardStyles }>`
  ${({ styles }) => css`
    width: ${styles?.keyboardInput.leftIcon || styles?.keyboardInput.rightIcon ? '80px' : '100%'};
    font-size: ${styles?.keyboardInput.fontSize}px;
    color: ${styles?.keyboardInput.color};
    text-align: ${styles?.keyboardInput.leftIcon || styles?.keyboardInput.rightIcon ? 'center' : 'left'};
  `}
  padding: 0 10px;
  font-family: 'Trebuchet MS', sans-serif;
  border: none;
  outline: none;
  resize: none;
`;
