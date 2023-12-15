import { IKeyboardStyles } from '../models';
import { Colors } from '../constants';
import { Icon } from '../components';

export const keyboardStyles: IKeyboardStyles = {
  keyboardInput: {
    width: 400,
    fontSize: 18,
    color: Colors.LIGHT_BLUE,
    borderColor: Colors.LIGHT_BLUE,
    borderWidth: 2,
    borderRadius: 10,
  },
  keyButton: {
    height: 65,
    rowGap: 10,
    columnGap: 15,
    fontSize: 22,
    fontFamily: '"Noto Sans Georgian", sans-serif',
    fontWeight: 600,
    pressedBgColor: Colors.GRAY,
    pressedTitleColor: Colors.LIGHT_BLUE,
    regular: {
      width: 65,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      borderRadius: 'circle',
    },
    action: {
      borderRadius: 33,
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
      width: 145,
      backgroundColor: Colors.LIGHT_BLUE,
      color: Colors.WHITE,
      leftIcon: <Icon type='backspace' size={25} color={Colors.WHITE} />,
    },
  }
}
