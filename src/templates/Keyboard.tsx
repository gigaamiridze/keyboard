import { KeyboardWrapper } from '../components';
import { IKeyboardProps } from '../models';

function Keyboard(props: IKeyboardProps) {
  const { mode, styles, language, defaultLayout, onKeyPress } = props;

  return (
    <KeyboardWrapper 
      mode={mode}
      styles={styles}
      language={language}
      defaultLayout={defaultLayout}
      onKeyPress={(value) => onKeyPress && onKeyPress(value)} 
    />
  )
}

export default Keyboard;
