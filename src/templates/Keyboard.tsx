import { useState } from 'react';
import { IKeyboardProps } from '../interfaces';
import { KeyboardContainer, LayoutWrapper, KeyButton, Row, DeleteIcon, GlobeIcon, UpIcon } from '../components';

const englishLayout: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift'],
  ['123/#+=', 'ქარ', ' ', 'Clean', 'Delete']
];

const georgianLayout: any[][] = [
  ['ქ', ['წ', 'ჭ'], 'ე', ['რ', 'ღ'], ['ტ', 'თ'], 'ყ', 'უ', 'ი', 'ო', 'პ'],
  ['ა', ['ს', 'შ'], 'დ', 'ფ', 'გ', 'ჰ', ['ჯ', 'ჭ'], 'კ', 'ლ'],
  ['Shift', ['ზ', 'ძ'], 'ხ', ['ც', 'ჩ'], 'ვ', 'ბ', 'ნ', 'მ', 'Shift'],
  ['123/#+=', 'Eng', ' ', 'გაწმენდა', 'წაშლა']
];

const commonSymbolLayout: string[][] = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['#', '$', '%', '!', '&', '@', '*', '/', '\\'],
  ['Shift', '+', '-', '=', '"', '_', ',', '.', 'Shift']
];

const symbolLayoutEn: string[][] = [
  ...commonSymbolLayout,
  ['123/#+=', 'ქარ', ' ', 'Clean', 'Delete']
];

const symbolLayoutGe: string[][] = [
  ...commonSymbolLayout,
  ['123/#+=', 'Eng', ' ', 'გაწმენდა', 'წაშლა']
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
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
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
      case 'Clean':
        if (updatedInput.length > 0) {
          updatedInput = '';
        }
        break;
      case 'წაშლა':
      case 'Delete':
        if (updatedInput.length > 0) {
          updatedInput = updatedInput.slice(0, -1);
        }
        break;
      case 'ქარ':
      case 'Eng':
        setCurrentLanguage(currentLanguage === 'en' ? 'ka' : 'en');
        break;
      default:
        updatedInput += isShiftActive ? key.toUpperCase() : key;
    }

    setInput(updatedInput);
    onKeyPress(updatedInput);
  };

  const symbolLayoutToUse = currentLanguage === 'en' ? symbolLayoutEn : symbolLayoutGe;
  const layoutToUse = isSymbolLayout ? symbolLayoutToUse : (currentLanguage === 'en' ? englishLayout : georgianLayout);

  return (
    <KeyboardContainer>
      {mode === 'qwerty' || mode === 'qwerty-numpad' ? (
        <LayoutWrapper>
          {layoutToUse.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((key, keyIndex) => {
                let keyToRender: string;
                if (Array.isArray(key)) {
                  keyToRender = isShiftActive && currentLanguage === 'ka' ? key[1] : key[0];
                } else {
                  keyToRender = key;
                }

                return (
                  <KeyButton
                    key={keyIndex}
                    styles={styles}
                    isSymbolActive={isSymbolLayout}
                    isShiftActive={isShiftActive}
                    isShift={key === 'Shift'}
                    isSymbol={key === '123/#+='}
                    isLanguage={key === 'ქარ' || key === 'Eng'}
                    isSpace={key === ' '}
                    isClean={key === 'გაწმენდა' || key === 'Clean'}
                    isDelete={key === 'წაშლა' || key === 'Delete'}
                    isUppercase={isShiftActive && /^[a-z]$/.test(key)}
                    onClick={() => handleKeyPress(keyToRender)}
                  >
                    {key === 'Shift' && <UpIcon />}
                    {key === 'ქარ' || key === 'Eng' ? <GlobeIcon /> : null}
                    {key === 'წაშლა' || key === 'Delete' ? <DeleteIcon /> : null}
                    {keyToRender}
                  </KeyButton>
                )
              })}
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
