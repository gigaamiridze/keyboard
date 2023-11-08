import { IKeyboardProps, IActionProps } from '../interfaces';
import { KeyboardLayout } from '../components';

const qwertyActions: IActionProps = {
  hasShift: true,
  hasSymbol: true,
  hasLanguage: true,
  hasSpace: true,
  hasClean: true,
  hasDelete: true
}

const numericActions: IActionProps = {
  hasShift: false,
  hasSymbol: false,
  hasLanguage: false,
  hasSpace: false,
  hasClean: false,
  hasDelete: true
}

const disabledActions: IActionProps = {
  hasShift: false,
  hasSymbol: false,
  hasLanguage: false,
  hasSpace: false,
  hasClean: false,
  hasDelete: false
}

function KeyboardWrapper(props: IKeyboardProps) {
  const { mode, styles, onKeyPress } = props;

  let actionProps: IActionProps = disabledActions;

  if (mode === 'qwerty' || mode === 'qwerty-numpad') {
    actionProps = qwertyActions;
  } else if (mode === 'numeric') {
    actionProps = numericActions;
  }

  return (
    <>
      <KeyboardLayout 
        mode={mode}
        styles={styles}
        actionProps={actionProps}
        onKeyPress={onKeyPress}
      />
    </>
  )
}

export default KeyboardWrapper;
