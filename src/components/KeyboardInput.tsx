import { InputContainer, StyledKeyboardInput } from '../components';
import { IKeyboardStyles } from '../interfaces';

interface IKeyboardInputProps {
  output: string;
  styles?: IKeyboardStyles;
}

function KeyboardInput(props: IKeyboardInputProps) {
  const { output, styles } = props;

  return (
    <InputContainer styles={styles}>
      {styles?.keyboardInput.leftIcon && styles.keyboardInput.leftIcon}
      <StyledKeyboardInput 
        value={output} 
        styles={styles} 
        readOnly 
      />
      {styles?.keyboardInput.rightIcon && styles.keyboardInput.rightIcon}
    </InputContainer>
  )
}

export default KeyboardInput;