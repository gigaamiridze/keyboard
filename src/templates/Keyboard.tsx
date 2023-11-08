import { IKeyboardTemplateProps } from '../interfaces';
import { tbcStyles, wissolStyles } from '../styles';
import { KeyboardWrapper } from '../components';

function Keyboard(props: IKeyboardTemplateProps) {
  const { mode, styleType, onKeyPress } = props;
  const styleToUse = styleType === 'tbc' ? tbcStyles : wissolStyles;

  return (
    <KeyboardWrapper 
      mode={mode}
      styles={styleToUse}
      onKeyPress={(output) => onKeyPress(output)} 
    />
  )
}

export default Keyboard;
