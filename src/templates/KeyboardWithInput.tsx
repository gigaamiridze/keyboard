import { useState } from 'react';
import { IKeyboardProps } from '../models';
import { KeyboardInput, KeyboardWrapper } from '../components';

function KeyboardWithInput(props: IKeyboardProps) {
  const [output, setOutput] = useState<string>('');
  const { mode, styles, inputMaxLength, onKeyPress } = props;

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
        onKeyPress={(value) => {
          setOutput(value);
          onKeyPress(value);
        }} 
      />
    </>
  )
}

export default KeyboardWithInput;
