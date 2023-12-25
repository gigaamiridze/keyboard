import { InputContainer, StyledKeyboardInput, Underscore } from '../styles';
import { KeyboardInputType, Colors } from '../constants';
import { IKeyboardInputProps } from '../models';
import { FlexBox, Icon } from '../components';

function KeyboardInput(props: IKeyboardInputProps) {
  const { type, inputMaxLength, output, styles } = props;
  const formatTemplate = type === KeyboardInputType.MOBILE_UNDERSCORE ? '___-______' : '_'.repeat(inputMaxLength);

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
      {type === KeyboardInputType.OUTLINED && (
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
      {type === KeyboardInputType.MOBILE_UNDERSCORE || type === KeyboardInputType.UNDERSCORE ? (
        <Underscore
          color={styles.input.color}
          fontSize={styles.input.fontSize}
          fontFamily={styles.keyButton.fontFamily}
        >
          {formatString(output, formatTemplate)}
        </Underscore>
      ) : null}
      {type === KeyboardInputType.PASSWORD && (
        <FlexBox 
          alignItems='center'
          additionalStyles={{ height: styles.input.passwordIconSize || 40 }}
        >
          {Array.from({ length: output.length }, (_, index) => (
            <Icon 
              key={index}
              type='ellipse' 
              size={styles.input.passwordIconSize || 40} 
              color={styles.input.passwordIconColor || Colors.BLACK} 
            />
          ))}
        </FlexBox>
      )}
    </>
  )
}

export default KeyboardInput;
