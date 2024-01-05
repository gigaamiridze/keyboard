import { useEffect, useCallback, useReducer } from 'react';
import { IButton, IKeyboardState } from '../models';
import { KeyboardActionType } from '../types';
import { getLayoutByLanguage } from '../utils';
import { Language, KeyboardAction } from '../constants';
import { englishLayout, georgianLayout, russianLayout } from '../utils';

const useKeyboardLayout = (initialLanguage: Language = Language.EN) => {
  const initialKeyboardState: IKeyboardState = {
    input: '',
    selectedLanguage: initialLanguage,
    currentLayout: getLayoutByLanguage(initialLanguage),
    isShiftActive: false,
    isSymbolActive: false,
  }

  const keyboardReducer = useCallback((state: IKeyboardState, action: KeyboardActionType) => {
    switch (action.type) {
      case KeyboardAction.SET_INPUT:
        return { ...state, input: action.payload };
      case KeyboardAction.SHIFT:
        return { ...state, isShiftActive: !state.isShiftActive };
      case KeyboardAction.SYMBOL:
        return { ...state, isSymbolActive: !state.isSymbolActive };
      case KeyboardAction.LANGUAGE_CHANGE:
        const { nextLayout, nextLanguage } = handleLanguageChange(state.currentLayout, state.selectedLanguage);
        return { ...state, currentLayout: nextLayout, selectedLanguage: nextLanguage };
      case KeyboardAction.SET_LAYOUT:
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

  useEffect(() => {
    const layout = getLayoutByLanguage(initialLanguage);

    dispatch({ 
      type: KeyboardAction.SET_LAYOUT, 
      payload: { currentLayout: layout, selectedLanguage: initialLanguage }, 
    });
  }, [initialLanguage]);

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

  const setInput = useCallback((value: string) => {
    let updatedInput = state.input;
    updatedInput += value;
    dispatch({ type: KeyboardAction.SET_INPUT, payload: updatedInput });
  }, [state.input]);

  const onShift = useCallback(() => {
    dispatch({ type: KeyboardAction.SHIFT });
  }, []);

  const onSymbol = useCallback(() => {
    dispatch({ type: KeyboardAction.SYMBOL });
  }, []);

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
