import { InputContainer, StyledKeyboardInput } from '../styles';
import { IKeyboardInputProps } from '../models';

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
