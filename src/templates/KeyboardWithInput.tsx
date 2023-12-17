import { useState, useCallback } from 'react';
import { IKeyboardProps } from '../models';
import { KeyboardInput, KeyboardWrapper } from '../components';

function KeyboardWithInput(props: IKeyboardProps) {
  const [output, setOutput] = useState<string>('');
  const { mode, styles, inputMaxLength, onKeyPress } = props;

  const wrappedOnKeyPress = useCallback((value: string) => {
    setOutput(value);
    onKeyPress(value)
  }, [onKeyPress]);

  return (
    <>
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
    </>
  )
}

export default KeyboardWithInput;
