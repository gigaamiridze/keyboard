import { InputContainer, StyledKeyboardInput } from '../styles';
import { IKeyboardInputProps } from '../models';

function KeyboardInput(props: IKeyboardInputProps) {
  const { output, styles } = props;

  return (
    <InputContainer styles={styles}>
      {styles.input.leftIcon && styles.input.leftIcon}
      <StyledKeyboardInput 
        value={output} 
        styles={styles} 
        readOnly 
      />
      {styles.input.rightIcon && styles.input.rightIcon}
    </InputContainer>
  )
}

export default KeyboardInput;
