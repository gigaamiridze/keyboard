import { Language } from '../constants';
import { IButton } from '../interfaces';

interface IKeyboardCommonProps {
  mode: 'numeric' | 'qwerty' | 'qwerty-numpad';
  onKeyPress: (input: string) => void;
}

export interface IKeyboardTemplateProps extends IKeyboardCommonProps {
  styleType: 'tbc' | 'wissol';
}

export interface IKeyboardProps extends IKeyboardCommonProps {
  styles?: IKeyboardStyles;
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

export interface IKeyboardStyles {
  keyboardInput: {
    width: number;
    fontSize: number;
    color: string;
    borderColor: string;
    borderWidth: number;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
  },
  keyButton: {
    regular: {
      width?: number;
      height?: number;
      backgroundColor?: string;
      color?: string;
      fontSize?: number;
      fontWeight?: number;
      borderRadius?: number;
    },
    shift?: IActionButtonStyles;
    symbol?: IActionButtonStyles;
    language?: IActionButtonStyles;
    space?: IActionButtonStyles;
    clean?: IActionButtonStyles;
    delete?: IActionButtonStyles;
  }
}

interface IActionButtonStyles {
  width?: number;
  backgroundColor?: string;
  color?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
