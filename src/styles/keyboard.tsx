import { IKeyboardStyles } from '../interfaces';
import { Colors } from '../constants';
import { Icon } from '../components';

export const tbcStyles: IKeyboardStyles = {
  keyboardInput: {
    width: 400,
    fontSize: 18,
    color: Colors.LIGHT_BLUE,
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 2,
  },
  keyButton: {
    regular: {
      width: 55,
      height: 50,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      fontSize: 17,
      fontWeight: 600,
      borderRadius: 9,
    },
    shift: {
      width: 85,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      leftIcon: <Icon type='up-arrow' size={18} color={Colors.LIGHT_BLUE} />,
    },
    symbol: {
      width: 85,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
    },
    language: {
      width: 80,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      leftIcon: <Icon type='globe' size={18} color={Colors.LIGHT_BLUE} />,
    },
    space: {
      width: 210,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
    },
    clean: {
      width: 100,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
    },
    delete: {
      width: 100,
      backgroundColor: Colors.GRAY,
      color: Colors.LIGHT_BLUE,
      leftIcon: <Icon type='backspace' size={18} color={Colors.LIGHT_BLUE} />,
    },
  }
}

export const wissolStyles: IKeyboardStyles = {
  keyboardInput: {
    width: 250,
    fontSize: 18,
    color: Colors.LIGHT_BLUE,
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 2,
    // leftIcon: <Icon type='euro-sign' size={18} color={Colors.LIGHT_BLUE} />,
    rightIcon: <Icon type='dollar-sign' size={18} color={Colors.LIGHT_BLUE} />,
  },
  keyButton: {
    regular: {
      width: 80,
      height: 50,
      backgroundColor: Colors.STRONGEST_GRAY,
      color: Colors.WHITE,
      fontSize: 16,
      fontWeight: 600,
      borderRadius: 9,
    },
    delete: {
      width: 100,
      backgroundColor: Colors.STRONG_GRAY,
      color: Colors.WHITE,
      leftIcon: <Icon type='left-arrow' size={18} color={Colors.WHITE} />,
    },
  }
}
