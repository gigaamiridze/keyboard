import { IKeyboardStyles } from './Keyboard';

export interface IKeyButtonProps {
  styles?: IKeyboardStyles;
  isSymbolActive?: boolean;
  isShiftActive?: boolean; 
  isShift?: boolean;
  isSymbol?: boolean;
  isLanguage?: boolean;
  isSpace?: boolean;
  isClean?: boolean;
  isDelete?: boolean;
  isUppercase?: boolean;
}
