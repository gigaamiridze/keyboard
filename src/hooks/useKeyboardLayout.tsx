import { useCallback, useReducer } from 'react';
import { IButton } from '../interfaces';
import { Language } from '../constants';
import { englishLayout, georgianLayout } from '../utils';

interface IKeyboardState {
  input: string;
  selectedLanguage: Language;
  currentLayout: IButton[][];
  isShiftActive: boolean;
  isSymbolActive: boolean;
}

type KeyboardActionType =
  | { type: KeyboardAction.SET_INPUT; payload: string }
  | { type: KeyboardAction.SHIFT }
  | { type: KeyboardAction.SYMBOL }
  | { type: KeyboardAction.LANGUAGE_CHANGE }
  | { type: KeyboardAction.SPACE; payload: string }
  | { type: KeyboardAction.CLEAN }
  | { type: KeyboardAction.DELETE }

enum KeyboardAction {
  SET_INPUT = 'SET_INPUT',
  SHIFT = 'SHIFT',
  SYMBOL = 'SYMBOL',
  LANGUAGE_CHANGE = 'LANGUAGE_CHANGE',
  SPACE = 'SPACE',
  CLEAN = 'CLEAN',
  DELETE = 'DELETE',
}

const initialKeyboardState: IKeyboardState = {
  input: '',
  selectedLanguage: Language.EN,
  currentLayout: englishLayout,
  isShiftActive: false,
  isSymbolActive: false,
}

const useKeyboardLayout = () => {
  const keyboardReducer = useCallback((state: IKeyboardState, action: KeyboardActionType) => {
    switch (action.type) {
      case KeyboardAction.SET_INPUT:
        return { ...state, input: action.payload };
      case KeyboardAction.SHIFT:
        return { ...state, isShiftActive: !state.isShiftActive };
      case KeyboardAction.SYMBOL:
        return { ...state, isSymbolActive: !state.isSymbolActive };
      case KeyboardAction.LANGUAGE_CHANGE:
        return { 
          ...state, 
          currentLayout: state.currentLayout === englishLayout ? georgianLayout : englishLayout,
          selectedLanguage: state.selectedLanguage === Language.EN ? Language.KA : Language.EN 
        };
      case KeyboardAction.SPACE:
        return { ...state, input: action.payload };
      case KeyboardAction.CLEAN:
        return { ...state, input: '' };
      case KeyboardAction.DELETE:
        return { ...state, input: state.input.slice(0, -1) };
    }
  }, []);

  const [state, dispatch] = useReducer(keyboardReducer, initialKeyboardState);

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
