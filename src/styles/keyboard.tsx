import { IKeyboardStyles } from '../models';
import { Colors } from '../constants';
import { Icon } from '../components';

export const numericKeyboardStyles: IKeyboardStyles = {
  input: {
    height: 45,
    fontSize: 30,
    color: Colors.BLACK,
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 2,
    borderRadius: 10,
    gapBetweenInputAndKeyboard: 50,
  },
  keyButton: {
    height: 95,
    rowGap: 15,
    columnGap: 20,
    fontSize: 30,
    fontFamily: '"Noto Sans Georgian", sans-serif',
    fontWeight: 600,
    disabledColor: Colors.GRAY,
    pressedBgColor: Colors.GRAY,
    pressedTitleColor: Colors.LIGHT_BLUE,
    regular: {
      width: 95,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      borderRadius: 'circle',
    },
    action: {
      borderRadius: 50,
    },
    delete: {
      width: 100,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      fontSize: 25,
      leftIcon: <Icon type='backspace' size={40} color={Colors.WHITE} />,
    },
  }
}

export const qwertyKeyboardStyles: IKeyboardStyles = {
  input: {
    height: 45,
    fontSize: 30,
    color: Colors.BLACK,
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 2,
    borderRadius: 10,
    gapBetweenInputAndKeyboard: 50,
  },
  keyButton: {
    height: 75,
    rowGap: 7,
    columnGap: 7,
    fontSize: 28,
    fontFamily: '"Noto Sans Georgian", sans-serif',
    fontWeight: 600,
    disabledColor: Colors.GRAY,
    pressedBgColor: Colors.GRAY,
    pressedTitleColor: Colors.LIGHT_BLUE,
    regular: {
      width: 85,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      borderRadius: 10,
    },
    action: {
      borderRadius: 10,
    },
    shift: {
      width: 131,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      fontSize: 23,
      leftIcon: <Icon type='up-arrow' size={25} color={Colors.LIGHT_BLUE} />,
    },
    symbol: {
      width: 131,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      fontSize: 23,
    },
    language: {
      width: 120,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      fontSize: 23,
      leftIcon: <Icon type='globe' size={30} color={Colors.LIGHT_BLUE} />,
    },
    space: {
      width: 294,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
    },
    clean: {
      width: 170,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      fontSize: 23,
    },
    delete: {
      width: 170,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      fontSize: 23,
      leftIcon: <Icon type='backspace' size={33} color={Colors.LIGHT_BLUE} />,
    },
  }
}
