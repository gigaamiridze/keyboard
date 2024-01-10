import { useEffect, useCallback, useReducer, useState } from 'react';
import { englishLayout, georgianLayout, russianLayout } from '../utils';
import { Language, KeyboardAction } from '../constants';
import { IButton, IKeyboardState } from '../models';
import { getLayoutByLanguage } from '../utils';
import { KeyboardActionType } from '../types';

const useKeyboardLayout = (initialLanguage: Language = Language.EN, defaultLayoutLanguage: Language | undefined) => {
  const initialLayout = defaultLayoutLanguage ? getLayoutByLanguage(defaultLayoutLanguage) : getLayoutByLanguage(initialLanguage);
  
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
        return { ...state, isShiftActive: !state.isShiftActive };
      case KeyboardAction.SYMBOL:
        return { ...state, isSymbolActive: !state.isSymbolActive };
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

  useEffect(() => {
    if (currentLayoutLanguage === undefined && defaultLayoutLanguage) {
      setCurrentLayoutLanguage(defaultLayoutLanguage);
    } else {
      setCurrentLayoutLanguage(initialLanguage);
      const layout = getLayoutByLanguage(initialLanguage);
      dispatch({ 
        type: KeyboardAction.SET_LAYOUT_AND_LANGUAGE, 
        payload: { currentLayout: layout, selectedLanguage: initialLanguage }, 
      });
    }
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
