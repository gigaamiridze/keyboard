import { useState } from 'react';
import { Colors } from './constants';
import { Keyboard } from './templates';
import { GlobalStyles } from './styles';
import { Textarea } from './components';
import { IKeyboardStyles } from './interfaces';

function App() {
  const [output, setOutput] = useState<string>('');

  const keyboardStyles: IKeyboardStyles = {
    keyButton: {
      default: {
        width: 55,
        height: 50,
        backgroundColor: Colors.LIGHT_BLUE,
        color: Colors.WHITE,
        fontSize: 17,
        fontWeight: 600,
        borderRadius: 8,
      },
      shift: {
        width: 85,
        backgroundColor: Colors.GRAY,
        color: Colors.LIGHT_BLUE,
      },
      symbol: {
        width: 85,
        backgroundColor: Colors.GRAY,
        color: Colors.LIGHT_BLUE,
      },
      language: {
        width: 80,
        backgroundColor: Colors.GRAY,
        color: Colors.LIGHT_BLUE,
      },
      space: {
        width: 210,
        backgroundColor: Colors.LIGHT_BLUE,
        color: Colors.WHITE,
      },
      clean: {
        width: 100,
        backgroundColor: Colors.GRAY,
        color: Colors.LIGHT_BLUE,
      },
      delete: {
        width: 100,
        backgroundColor: Colors.GRAY,
        color: Colors.LIGHT_BLUE,
      },
    }
  };

  return (
    <>
      <GlobalStyles />
      <Textarea value={output} readOnly />
      <Keyboard 
        mode='qwerty-numpad'
        styles={keyboardStyles}
        onKeyPress={(output) => setOutput(output)} 
      />
    </>
  )
}

export default App;
