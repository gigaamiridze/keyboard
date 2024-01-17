import { useEffect, useCallback, useReducer, useState } from 'react';
import { englishLayout, georgianLayout, russianLayout, findKeyByPressedKey, findButtonByPressedKey, getLayoutByKeyboardMode } from '../utils';
import { Language, KeyboardAction, KeyboardMode } from '../constants';
import { IButton, IKeyboardState } from '../models';
import { getLayoutByLanguage } from '../utils';
import { KeyboardActionType } from '../types';
import { useKeyPress } from '../hooks';

const useKeyboardLayout = (initialLanguage: Language = Language.EN, defaultLayoutLanguage?: Language, inputMaxLength?: number, keyboardMode?: KeyboardMode) => {
  const initialLayout = defaultLayoutLanguage 
    ? getLayoutByLanguage(defaultLayoutLanguage) 
    : keyboardMode ? getLayoutByKeyboardMode(keyboardMode, initialLanguage) 
    : getLayoutByLanguage(initialLanguage); 

  const initialKeyboardState: IKeyboardState = {
    input: '',
    selectedLanguage: initialLanguage,
    currentLayout: initialLayout,
    isShiftActive: false,
    isSymbolActive: false,
  }

  const keyboardReducer = useCallback((state: IKeyboardState, action: KeyboardActionType) => {
    switch (action.type) {
      case KeyboardAction.SET_INPUT:
        return { ...state, input: action.payload };
      case KeyboardAction.SHIFT:
        return { ...state, isShiftActive: action.payload ? action.payload : !state.isShiftActive };
      case KeyboardAction.SYMBOL:
        return { ...state, isSymbolActive: action.payload ? action.payload : !state.isSymbolActive };
      case KeyboardAction.LANGUAGE_CHANGE:
        const { nextLayout, nextLanguage } = handleLanguageChange(state.currentLayout, state.selectedLanguage);
        return { ...state, currentLayout: nextLayout, selectedLanguage: nextLanguage };
      case KeyboardAction.SET_LAYOUT_AND_LANGUAGE:
        const { currentLayout, selectedLanguage } = action.payload;
        return { ...state, currentLayout, selectedLanguage };
      case KeyboardAction.SPACE:
        return { ...state, input: action.payload };
      case KeyboardAction.CLEAN:
        return { ...state, input: '' };
      case KeyboardAction.DELETE:
        return { ...state, input: state.input.slice(0, -1) };
      default:
        return state;
    }
  }, []);

  const [state, dispatch] = useReducer(keyboardReducer, initialKeyboardState);
  const [currentLayoutLanguage, setCurrentLayoutLanguage] = useState<Language | undefined>(undefined);
  const { input, selectedLanguage, currentLayout, isShiftActive, isSymbolActive } = state;
  const { pressedKey } = useKeyPress();

  useEffect(() => {
    if (currentLayoutLanguage === undefined && defaultLayoutLanguage) {
      setCurrentLayoutLanguage(defaultLayoutLanguage);
    } else if (currentLayoutLanguage) {
      setCurrentLayoutLanguage(initialLanguage);
      const layout = getLayoutByLanguage(initialLanguage);
      dispatch({ 
        type: KeyboardAction.SET_LAYOUT_AND_LANGUAGE, 
        payload: { currentLayout: layout, selectedLanguage: initialLanguage }, 
      });
    }
  }, [initialLanguage]);

  useEffect(() => {
    switch (pressedKey) {
      case 'Shift':
        onShift();
        break;
      case 'CapsLock':
        onSymbol();
        break;
      case 'Delete':
      case 'Backspace':
        onDelete();
        break;
      case 'Escape':
        onClean();
        break;
      case 'Control':
        onLanguageChange();
        break;
      case ' ':
        onSpace();
        break;
      default:
        onKeyPress();
        break;
    }
  }, [pressedKey]);

  const handleLanguageChange = (currentLayout: IButton[][], selectedLanguage: Language) => {
    let nextLayout;
    let nextLanguage;
  
    switch (currentLayout) {
      case englishLayout:
        nextLayout = selectedLanguage === Language.KA ? georgianLayout : russianLayout;
        nextLanguage = selectedLanguage === Language.KA ? Language.KA : Language.RU;
        break;
      case georgianLayout:
        nextLayout = englishLayout;
        nextLanguage = Language.EN;
        break;
      default:
        nextLayout = georgianLayout;
        nextLanguage = Language.KA;
        break;
    }
  
    return { nextLayout, nextLanguage };
  };

  const setInput = useCallback((value: string | null) => {
    let updatedInput = input;
    updatedInput += value;
    dispatch({ type: KeyboardAction.SET_INPUT, payload: updatedInput });
  }, [input]);

  const onShift = useCallback(() => {
    dispatch({ type: KeyboardAction.SHIFT });
    if (isSymbolActive) {
      dispatch({ type: KeyboardAction.SYMBOL, payload: false });
    }
  }, [isSymbolActive]);

  const onSymbol = useCallback(() => {
    dispatch({ type: KeyboardAction.SYMBOL });
    if (isShiftActive) {
      dispatch({ type: KeyboardAction.SHIFT, payload: false });
    }
  }, [isShiftActive]);

  const onLanguageChange = useCallback(() => {
    dispatch({ type: KeyboardAction.LANGUAGE_CHANGE });
  }, []);

  const onSpace = useCallback(() => {
    let updatedInput = input;
    updatedInput += ' ';
    dispatch({ type: KeyboardAction.SPACE, payload: updatedInput });
  }, [input]);

  const onClean = useCallback(() => {
    if (input.length > 0) {
      dispatch({ type: KeyboardAction.CLEAN });
    }
  }, [input]);

  const onDelete = useCallback(() => {
    if (input.length > 0) {
      dispatch({ type: KeyboardAction.DELETE });
    }
  }, [input]);

  const onKeyPress = useCallback(() => {
    const button = findButtonByPressedKey(currentLayout, pressedKey);
    const key = findKeyByPressedKey(currentLayout, pressedKey);

    if (button && key && isInputLengthValid()) {
      setInput(getInputValue(button, key));
    }
  }, [pressedKey, currentLayout]);

  const isInputLengthValid = useCallback(() => {
    return input.length !== inputMaxLength;
  }, [input, inputMaxLength]);

  const getInputValue = useCallback((button: IButton, key: string) => {
    const shiftValue = key === button.symbolValue ? button.symbolValue : button.shiftValue;
    const regularValue = key === button.shiftValue ? button.value : key === button.symbolValue ? button.symbolValue : button.label;

    return isShiftActive ? shiftValue : regularValue;
  }, [isShiftActive]);

  return { 
    ...state,
    setInput,
    onShift,
    onSymbol,
    onLanguageChange,
    onSpace,
    onClean,
    onDelete 
  }
};

export default useKeyboardLayout;
