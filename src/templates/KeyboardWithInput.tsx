import { useState, useCallback } from 'react';
import { IKeyboardProps } from '../models';
import { KeyboardInput, KeyboardWrapper, FlexBox } from '../components';

function KeyboardWithInput(props: IKeyboardProps) {
  const [output, setOutput] = useState<string>('');
  const { mode, styles, inputMaxLength, onKeyPress } = props;

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
        output={output} 
        styles={styles} 
      />
      <KeyboardWrapper 
        mode={mode}
        styles={styles}
        inputMaxLength={inputMaxLength}
        onKeyPress={wrappedOnKeyPress} 
      />
    </FlexBox>
  )
}

export default KeyboardWithInput;
