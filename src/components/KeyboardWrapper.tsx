import { disabledActions, qwertyActions, numericActions, numericDotActions } from '../constants';
import { IKeyboardProps, IActionProps } from '../models';
import { KeyboardLayout } from '../components';
import { KeyboardMode } from '../constants';

function KeyboardWrapper(props: IKeyboardProps) {
  const { mode, styles, inputMaxLength, onKeyPress } = props;
  let actionProps: IActionProps = disabledActions;

  if (mode === KeyboardMode.QWERTY || mode === KeyboardMode.QWERTY_NUMPAD) {
    actionProps = qwertyActions;
  } else if (mode === KeyboardMode.NUMERIC) {
    actionProps = numericActions;
  } else if (mode === KeyboardMode.NUMERIC_DOT) {
    actionProps = numericDotActions;
  }

  return (
    <KeyboardLayout 
      mode={mode}
      styles={styles}
      actionProps={actionProps}
      inputMaxLength={inputMaxLength}
      onKeyPress={onKeyPress}
    />
  )
}

export default KeyboardWrapper;
