import { useEffect } from 'react';
import { KeyboardMode } from '../constants';
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
  const { mode, styles, actionProps, inputMaxLength, onKeyPress } = props;
  
  useEffect(() => {
    onKeyPress && onKeyPress(input);
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
      {mode === KeyboardMode.QWERTY || mode === KeyboardMode.QWERTY_NUMPAD ? (
        <QwertyKeyboard 
          actionProps={actionProps}
          input={input}
          inputMaxLength={inputMaxLength}
          hookProps={qwertyKeyboardHookProps}
          styles={styles}
        />
      ) : null}
      {mode === KeyboardMode.QWERTY_NUMPAD && (
        <NumpadKeyboard 
          styles={styles}
          input={input}
          inputMaxLength={inputMaxLength}
          setInput={setInput}
        />
      )}
      {mode === KeyboardMode.NUMERIC || mode === KeyboardMode.NUMERIC_DOT ? (
        <NumericKeyboard 
          styles={styles}
          actionProps={actionProps}
          input={input}
          inputMaxLength={inputMaxLength}
          isNumericMode={mode === KeyboardMode.NUMERIC}
          selectedLanguage={selectedLanguage}
          setInput={setInput}
          onDelete={onDelete}
        />
      ) : null}
    </FlexBox>
  )
}

export default KeyboardLayout;
