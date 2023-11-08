import { useState } from 'react';
import { tbcStyles, wissolStyles } from '../styles';
import { IKeyboardTemplateProps } from '../interfaces';
import { KeyboardInput, KeyboardWrapper } from '../components';

function KeyboardWithInput(props: IKeyboardTemplateProps) {
  const [output, setOutput] = useState<string>('');
  const { mode, styleType, onKeyPress } = props;
  const styleToUse = styleType === 'tbc' ? tbcStyles : wissolStyles;

  return (
    <>
      <KeyboardInput 
        output={output} 
        styles={styleToUse} 
      />
      <KeyboardWrapper 
        mode={mode}
        styles={styleToUse}
        onKeyPress={(output) => {
          setOutput(output);
          onKeyPress(output);
        }} 
      />
    </>
  )
}

export default KeyboardWithInput;
