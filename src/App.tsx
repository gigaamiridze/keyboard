import { useState } from 'react';
import { GlobalStyles } from './styles';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { KeyboardWithInput, Keyboard } from './templates';

function App() {
  const [output, setOutput] = useState<string>('');

  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      {/* <Keyboard 
        mode='qwerty'
        styleType='tbc'
        onKeyPress={(output) => setOutput(output)}
      /> */}
      <KeyboardWithInput 
        mode='qwerty'
        styleType='tbc'
        onKeyPress={(output) => setOutput(output)}
      />
    </StyleSheetManager>
  )
}

export default App;
