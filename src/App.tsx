import { useState } from 'react';
import { GlobalStyles } from './styles';
import { KeyboardWithInput, Keyboard } from './templates';

function App() {
  const [output, setOutput] = useState<string>('');

  return (
    <>
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
    </>
  )
}

export default App;
