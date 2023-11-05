export interface IKeyboardProps {
  mode: 'numeric' | 'qwerty' | 'qwerty-numpad';
  styles?: IKeyboardStyles;
  onKeyPress: (input: string) => void;
}

export interface IKeyboardStyles {
  keyButton: {
    default: {
      width?: number;
      height?: number;
      backgroundColor?: string;
      color?: string;
      fontSize?: number;
      fontWeight?: number;
      borderRadius?: number;
    },
    shift?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    },
    symbol?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    },
    language?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    },
    space?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    },
    clean?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    },
    delete?: {
      width?: number;
      backgroundColor?: string;
      color?: string;
    }
  }
}
