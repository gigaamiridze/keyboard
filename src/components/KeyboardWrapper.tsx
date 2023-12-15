import { disabledActions, qwertyActions, numericActions, numericDotActions } from '../constants';
import { IKeyboardProps, IActionProps } from '../models';
import { KeyboardLayout } from '../components';

function KeyboardWrapper(props: IKeyboardProps) {
  const { mode, styles, onKeyPress } = props;
  let actionProps: IActionProps = disabledActions;

  if (mode === 'qwerty' || mode === 'qwerty-numpad') {
    actionProps = qwertyActions;
  } else if (mode === 'numeric') {
    actionProps = numericActions;
  } else if (mode === 'numeric-dot') {
    actionProps = numericDotActions;
  }

  return (
    <KeyboardLayout 
      mode={mode}
      styles={styles}
      actionProps={actionProps}
      onKeyPress={onKeyPress}
    />
  )
}

export default KeyboardWrapper;
