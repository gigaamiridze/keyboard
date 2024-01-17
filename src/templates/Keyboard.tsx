import { KeyboardWrapper } from '../components';
import { IKeyboardProps } from '../models';

function Keyboard(props: IKeyboardProps) {
  const { mode, styles, language, defaultLayoutLanguage, onKeyPress } = props;

  return (
    <KeyboardWrapper 
      mode={mode}
      styles={styles}
      language={language}
      defaultLayoutLanguage={defaultLayoutLanguage}
      onKeyPress={(value) => onKeyPress && onKeyPress(value)} 
    />
  )
}

export default Keyboard;
