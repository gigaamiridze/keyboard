import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyles, numericKeyboardStyles, qwertyKeyboardStyles } from './styles';
import { KeyboardMode, KeyboardInputType } from './constants';
import { KeyboardWithInput } from './templates';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <KeyboardWithInput 
        mode={KeyboardMode.QWERTY_NUMPAD}
        styles={qwertyKeyboardStyles}
        inputType={KeyboardInputType.PASSWORD}
        inputMaxLength={20}
      />
    </StyleSheetManager>
  )
}

export default App;
