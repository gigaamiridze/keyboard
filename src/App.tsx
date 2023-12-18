import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyles, keyboardStyles } from './styles';
import { KeyboardWithInput } from './templates';

function App() {
  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <KeyboardWithInput 
        mode='numeric'
        styles={keyboardStyles}
        inputType='mobile-underscore'
      />
    </StyleSheetManager>
  )
}

export default App;
