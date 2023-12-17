import { KeyboardAction } from '../constants';

export type KeyboardActionType =
  | { type: KeyboardAction.SET_INPUT; payload: string }
  | { type: KeyboardAction.SHIFT }
  | { type: KeyboardAction.SYMBOL }
  | { type: KeyboardAction.LANGUAGE_CHANGE }
  | { type: KeyboardAction.SPACE; payload: string }
  | { type: KeyboardAction.CLEAN }
  | { type: KeyboardAction.DELETE }

export type KeyboardInputType = 'field' | 'mobile-underscore' |'underscore';
