import { IKeyboardStylesProp } from '../models';
import { ActionButtonType } from '../types';

export interface IButton {
  label: string;
  value: string;
  shiftValue: string;
  symbolValue: string;
}

export interface IButtonProps extends IKeyboardStylesProp {
  type?: ActionButtonType;
  isNumericDotMode?: boolean;
  isActive?: boolean;
}

export interface IActionButtonProps extends IKeyboardStylesProp {
  label: string;
  type: ActionButtonType;
  isNumericDotMode?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isActive?: boolean;
  onPress: () => void;
}

export interface IRegularButtonProps extends IKeyboardStylesProp {
	keyOptions: IButton;
  isShiftActive?: boolean;
  isSymbolActive?: boolean;
	onPress: (value: string) => void;
}
