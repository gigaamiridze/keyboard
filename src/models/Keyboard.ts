import { IButton, IActionProps } from '../models';
import { KeyboardInputType } from '../types';
import { Language } from '../constants';

export interface IKeyboardState {
  input: string;
  selectedLanguage: Language;
  currentLayout: IButton[][];
  isShiftActive: boolean;
  isSymbolActive: boolean;
}

export interface IKeyboardWithInputProps extends IKeyboardProps {
  inputType: KeyboardInputType;
}

export interface IKeyboardProps extends IKeyboardStylesProp {
  mode: 'numeric' | 'numeric-dot' | 'qwerty' | 'qwerty-numpad';
  onKeyPress: (value: string) => void;
  inputMaxLength?: number; 
}

export interface IKeyboardLayoutProps extends IKeyboardProps {
  actionProps: IActionProps;
}

export interface IKeyboardInputProps extends IKeyboardStylesProp {
  type: KeyboardInputType;
  inputMaxLength: number;
  output: string;
}

export interface INumericKeyboardProps extends IKeyboardStylesProp {
  actionProps: IActionProps;
  selectedLanguage: Language;
  input?: string;
  inputMaxLength?: number;
  isNumericMode: boolean;
  setInput: (value: string) => void;
  onDelete: () => void;
}

export interface IQwertyKeyboardProps extends IKeyboardStylesProp {
  actionProps: IActionProps;
  hookProps: IQwertyKeyboardHookProps;
}

export interface INumpadKeyboardProps extends IKeyboardStylesProp {
  setInput: (value: string) => void;
}

export interface IQwertyKeyboardHookProps {
  currentLayout: IButton[][];
  selectedLanguage: Language;
  isShiftActive: boolean;
  isSymbolActive: boolean;
  setInput: (value: string) => void;
  onShift: () => void;
  onSymbol: () => void;
  onLanguageChange: () => void;
  onSpace: () => void;
  onClean: () => void;
  onDelete: () => void;
}

export interface IKeyboardStylesProp {
  styles: IKeyboardStyles;
}

export interface IKeyboardStyles {
  input: {
    width?: number;
    height?: number;
    fontSize: number;
    color: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    gapBetweenInputAndKeyboard: number;
  },
  keyButton: {
    height: number;
    rowGap: number;
    columnGap: number;
    disabledColor: string;
    pressedBgColor: string;
    pressedTitleColor: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: number;
    regular: IRegularButtonStyles;
    action: { borderRadius: BorderRadiusType };
    shift?: IActionButtonStyles;
    symbol?: IActionButtonStyles;
    language?: IActionButtonStyles;
    space?: IActionButtonStyles;
    clean?: IActionButtonStyles;
    delete?: IActionButtonStyles;
  }
}

interface IRegularButtonStyles {
  width: number;
  color: string;
  backgroundColor: string;
  borderRadius: BorderRadiusType;
}

interface IActionButtonStyles {
  width: number;
  color: string;
  backgroundColor: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

type BorderRadiusType = number | 'circle';
