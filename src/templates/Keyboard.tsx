import { KeyboardWrapper } from '../components';
import { IKeyboardProps } from '../models';

function Keyboard(props: IKeyboardProps) {
  const { mode, styles, onKeyPress } = props;

  return (
    <KeyboardWrapper 
      mode={mode}
      styles={styles}
      onKeyPress={(value) => onKeyPress && onKeyPress(value)} 
    />
  )
}

export default Keyboard;
