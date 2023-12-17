import { useState, useCallback } from 'react';
import { IKeyboardWithInputProps } from '../models';
import { KeyboardInput, KeyboardWrapper, FlexBox } from '../components';

function KeyboardWithInput(props: IKeyboardWithInputProps) {
  const [output, setOutput] = useState<string>('');
  const { mode, styles, inputType, inputMaxLength, onKeyPress } = props;
  const keyboardInputMaxLength = inputType === 'mobile-underscore' ? 9 : inputMaxLength ? inputMaxLength : 4;

  const wrappedOnKeyPress = useCallback((value: string) => {
    setOutput(value);
    onKeyPress(value)
  }, [onKeyPress]);

  return (
    <FlexBox
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      rowGap={styles.input.gapBetweenInputAndKeyboard}
    >
      <KeyboardInput 
        type={inputType}
        inputMaxLength={keyboardInputMaxLength}
        output={output} 
        styles={styles} 
      />
      <KeyboardWrapper 
        mode={mode}
        styles={styles}
        inputMaxLength={keyboardInputMaxLength}
        onKeyPress={wrappedOnKeyPress} 
      />
    </FlexBox>
  )
}

export default KeyboardWithInput;
