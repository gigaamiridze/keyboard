import { useState } from 'react';
import { IKeyboardProps } from '../interfaces';
import { KeyboardContainer, LayoutWrapper, KeyButton, Row, DeleteIcon, GlobeIcon, UpIcon } from '../components';

const qwertyLayout: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift'],
  ['123/#+=', 'ქარ', ' ', 'გაწმენდა', 'წაშლა']
];

const symbolLayout: string[][] = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['#', '$', '%', '!', '&', '@', '*', '/', '\\'],
  ['Shift', '+', '-', '=', '"', '_', ',', '.', 'Shift'],
  ['123/#+=', 'ქარ', ' ', 'გაწმენდა', 'წაშლა']
];

const numpadLayout: string[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['0'],
];

const numericLayout: string[][] = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['.', '0', 'წაშლა'],
];

function Keyboard(props: IKeyboardProps) {
  const [input, setInput] = useState<string>('');
  const [isShiftActive, setShiftActive] = useState<boolean>(false);
  const [isSymbolLayout, setSymbolLayout] = useState<boolean>(false);
  const { mode, styles, onKeyPress } = props;

  const handleKeyPress = (key: string) => {
    let updatedInput = input;

    switch (key) {
      case 'Shift':
        setShiftActive(!isShiftActive);
        break;
      case '123/#+=':
        setSymbolLayout(!isSymbolLayout);
        break;
      case ' ':
        updatedInput += ' ';
        break;
      case 'გაწმენდა':
        if (updatedInput.length > 0) {
          updatedInput = '';
        }
        break;
      case 'წაშლა':
        if (updatedInput.length > 0) {
          updatedInput = updatedInput.slice(0, -1);
        }
        break;
      case 'ქარ':
        break;
      default:
        updatedInput += isShiftActive ? key.toUpperCase() : key;
    }

    setInput(updatedInput);
    onKeyPress(updatedInput);
  };

  const layoutToUse = isSymbolLayout ? symbolLayout : qwertyLayout;

  return (
    <KeyboardContainer>
      {mode === 'qwerty' || mode === 'qwerty-numpad' ? (
        <LayoutWrapper>
          {layoutToUse.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((key, keyIndex) => (
                <KeyButton
                  key={keyIndex}
                  styles={styles}
                  isSymbolActive={isSymbolLayout}
                  isShiftActive={isShiftActive}
                  isShift={key === 'Shift'}
                  isSymbol={key === '123/#+='}
                  isLanguage={key === 'ქარ'}
                  isSpace={key === ' '}
                  isClean={key === 'გაწმენდა'}
                  isDelete={key === 'წაშლა'}
                  isUppercase={isShiftActive && /^[a-z]$/.test(key)}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === 'Shift' && <UpIcon />}
                  {key === 'ქარ' && <GlobeIcon />}
                  {key === 'წაშლა' && <DeleteIcon />}
                  {key}
                </KeyButton>
              ))}
            </Row>
          ))}
        </LayoutWrapper>
      ) : null}
      {mode === 'qwerty-numpad' && (
        <LayoutWrapper>
          {numpadLayout.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((key, keyIndex) => (
                <KeyButton
                  key={keyIndex}
                  styles={styles}
                  onClick={() => handleKeyPress(key)}
                >
                  {key}
                </KeyButton>
              ))}
            </Row>
          ))}
        </LayoutWrapper>
      )}
      {mode === 'numeric' && (
        <LayoutWrapper>
          {numericLayout.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((key, keyIndex) => (
                <KeyButton
                  key={keyIndex}
                  styles={styles}
                  isDelete={key === 'წაშლა'}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === 'წაშლა' && <DeleteIcon />}
                  {key}
                </KeyButton>
              ))}
            </Row>
          ))}
        </LayoutWrapper>
      )}
    </KeyboardContainer>
  )
}

export default Keyboard;
