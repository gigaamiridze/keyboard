import { useEffect } from 'react';
import { FlexBox } from '../components';
import { useKeyboardLayout } from '../hooks';
import { IKeyboardProps, IActionProps, IQwertyHookProps } from '../interfaces';
import { QwertyKeyboard, NumpadKeyboard, NumericKeyboard } from '../components';

interface IKeyboardLayoutProps extends IKeyboardProps {
  actionProps: IActionProps;
}

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

  const qwertyHookOptions: IQwertyHookProps = {
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
          hookOptions={qwertyHookOptions}
          styles={styles}
        />
      ) : null}
      {mode === 'qwerty-numpad' && (
        <NumpadKeyboard 
          styles={styles}
          setInput={setInput}
        />
      )}
      {mode === 'numeric' && (
        <NumericKeyboard 
          styles={styles}
          isNumericMode={mode === 'numeric'}
          actionProps={actionProps}
          selectedLanguage={selectedLanguage}
          setInput={setInput}
          onDelete={onDelete}
        />
      )}
    </FlexBox>
  )
}

export default KeyboardLayout;
