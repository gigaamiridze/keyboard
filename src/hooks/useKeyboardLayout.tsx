import { useEffect, useCallback, useReducer, useState } from 'react';
import { englishLayout, georgianLayout, russianLayout, findKeyByPressedKey, getLayoutByKeyboardMode } from '../utils';
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
    let updatedInput = state.input;
    updatedInput += value;
    dispatch({ type: KeyboardAction.SET_INPUT, payload: updatedInput });
  }, [state.input]);

  const onShift = useCallback(() => {
    dispatch({ type: KeyboardAction.SHIFT });
    if (state.isSymbolActive) {
      dispatch({ type: KeyboardAction.SYMBOL, payload: false });
    }
  }, [state.isSymbolActive]);

  const onSymbol = useCallback(() => {
    dispatch({ type: KeyboardAction.SYMBOL });
    if (state.isShiftActive) {
      dispatch({ type: KeyboardAction.SHIFT, payload: false });
    }
  }, [state.isShiftActive]);

  const onLanguageChange = useCallback(() => {
    dispatch({ type: KeyboardAction.LANGUAGE_CHANGE });
  }, []);

  const onSpace = useCallback(() => {
    let updatedInput = state.input;
    updatedInput += ' ';
    dispatch({ type: KeyboardAction.SPACE, payload: updatedInput });
  }, [state.input]);

  const onClean = useCallback(() => {
    if (state.input.length > 0) {
      dispatch({ type: KeyboardAction.CLEAN });
    }
  }, [state.input]);

  const onDelete = useCallback(() => {
    if (state.input.length > 0) {
      dispatch({ type: KeyboardAction.DELETE });
    }
  }, [state.input]);

  const onKeyPress = useCallback(() => {
    const key = findKeyByPressedKey(state.currentLayout, pressedKey);

    if (key && isInputLengthValid()) {
      setInput(key);
    }
  }, [pressedKey, state.currentLayout, state.input, inputMaxLength]);

  const isInputLengthValid = () => {
    return state.input.length !== inputMaxLength;
  };

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
