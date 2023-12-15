import { useState } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyles, keyboardStyles } from './styles';
import { KeyboardWithInput, Keyboard } from './templates';

function App() {
  const [output, setOutput] = useState<string>('');

  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <KeyboardWithInput 
        mode='numeric'
        styles={keyboardStyles}
        inputMaxLength={3}
        onKeyPress={(value) => setOutput(value)}
      />
    </StyleSheetManager>
  )
}

export default App;
