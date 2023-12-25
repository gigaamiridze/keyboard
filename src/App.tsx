import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyles, numericKeyboardStyles, qwertyKeyboardStyles } from './styles';
import { KeyboardWithInput } from './templates';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <KeyboardWithInput 
        mode='qwerty-numpad'
        styles={qwertyKeyboardStyles}
        inputType='underscore'
        inputMaxLength={20}
      />
    </StyleSheetManager>
  )
}

export default App;
