import { useState } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import { KeyboardWithInput } from './templates';
import { KeyboardMode, KeyboardInputType, Language } from './constants';
import { GlobalStyles, numericKeyboardStyles, qwertyKeyboardStyles } from './styles';
import { FlexBox } from './components';

function App() {
  const [language, setLanguage] = useState<Language>(Language.KA);

  return (
    <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
      <GlobalStyles />
      <FlexBox
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        rowGap={40}
      > 
        <FlexBox alignItems='center' justifyContent='center' columnGap={40}>
          <button onClick={() => setLanguage(Language.EN)}>English</button>
          <button onClick={() => setLanguage(Language.KA)}>Georgian</button>
          <button onClick={() => setLanguage(Language.RU)}>Russian</button>
        </FlexBox>
        <KeyboardWithInput 
          mode={KeyboardMode.QWERTY_NUMPAD}
          styles={qwertyKeyboardStyles}
          language={language}
          inputType={KeyboardInputType.PASSWORD}
          inputMaxLength={20}
        />
      </FlexBox>
    </StyleSheetManager>
  )
}

export default App;
