import { useEffect } from 'react';
import { useKeyboardLayout } from '../hooks';
import { IKeyboardLayoutProps, IQwertyKeyboardHookProps } from '../models';
import { QwertyKeyboard, NumpadKeyboard, NumericKeyboard, FlexBox } from '../components';

function KeyboardLayout(props: IKeyboardLayoutProps) {
  const { 
    currentLayout, 
    selectedLanguage, 
    isShiftActive, 
    isSymbolActive, 
    input, 
    setInput, 
    onShift, 
    onSymbol, 
    onLanguageChange,
    onSpace, 
    onClean, 
    onDelete 
  } = useKeyboardLayout();
  const { mode, styles, actionProps, onKeyPress } = props;
  
  useEffect(() => {
    onKeyPress(input);
  }, [input]);

  const qwertyKeyboardHookProps: IQwertyKeyboardHookProps = {
    currentLayout,
    selectedLanguage,
    isShiftActive,
    isSymbolActive,
    setInput,
    onShift,
    onSymbol,
    onLanguageChange,
    onSpace,
    onClean,
    onDelete 
  }
  
  return (
    <FlexBox alignItems='flex-start' columnGap={20}>
      {mode === 'qwerty' || mode === 'qwerty-numpad' ? (
        <QwertyKeyboard 
          actionProps={actionProps}
          hookProps={qwertyKeyboardHookProps}
          styles={styles}
        />
      ) : null}
      {mode === 'qwerty-numpad' && (
        <NumpadKeyboard 
          styles={styles}
          setInput={setInput}
        />
      )}
      {mode === 'numeric' || mode === 'numeric-dot' ? (
        <NumericKeyboard 
          styles={styles}
          actionProps={actionProps}
          selectedLanguage={selectedLanguage}
          setInput={setInput}
          onDelete={onDelete}
        />
      ) : null}
    </FlexBox>
  )
}

export default KeyboardLayout;
