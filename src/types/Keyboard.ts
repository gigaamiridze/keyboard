import { KeyboardAction, Language } from '../constants';
import { IButton } from '../models';

export type KeyboardActionType =
  | { type: KeyboardAction.SET_INPUT; payload: string }
  | { type: KeyboardAction.SHIFT, payload?: boolean }
  | { type: KeyboardAction.SYMBOL, payload?: boolean }
  | { type: KeyboardAction.LANGUAGE_CHANGE }
  | { type: KeyboardAction.SET_LAYOUT_AND_LANGUAGE, payload: { selectedLanguage: Language, currentLayout: IButton[][] }}
  | { type: KeyboardAction.SPACE; payload: string }
  | { type: KeyboardAction.CLEAN }
  | { type: KeyboardAction.DELETE };
