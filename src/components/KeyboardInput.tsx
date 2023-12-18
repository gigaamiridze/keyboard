import { InputContainer, StyledKeyboardInput, Underscore } from '../styles';
import { IKeyboardInputProps } from '../models';

function KeyboardInput(props: IKeyboardInputProps) {
  const { type, inputMaxLength, output, styles } = props;
  const formatTemplate = type === 'mobile-underscore' ? '___-______' : '_'.repeat(inputMaxLength);

  const formatString = (input: string, formatTemplate: string) => {
    if (!input || !formatTemplate) {
      return formatTemplate;
    }
  
    const characters = input.split('').slice(0, inputMaxLength);

    const formattedCharacters = characters.map((char, index) => {
      return formatTemplate[index] === '_' ? char : `-${char}`;
    }).join('');
  
    return formatTemplate.replace(/_/g, (_, index) => formattedCharacters.charAt(index) || '_');
  }

  return (
    <>
      {type === 'outlined' && (
        <InputContainer styles={styles}>
          {styles.input.leftIcon && styles.input.leftIcon}
          <StyledKeyboardInput 
            value={output} 
            styles={styles} 
            readOnly 
          />
          {styles.input.rightIcon && styles.input.rightIcon}
        </InputContainer>
      )}
      {type === 'mobile-underscore' || type === 'underscore' ? (
        <Underscore
          color={styles.input.color}
          fontSize={styles.input.fontSize}
          fontFamily={styles.keyButton.fontFamily}
        >
          {formatString(output, formatTemplate)}
        </Underscore>
      ) : null}
    </>
  )
}

export default KeyboardInput;
