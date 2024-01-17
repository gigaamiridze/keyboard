import { IButton } from '../models';

export const findButtonByPressedKey = (currentLayout: IButton[][], pressedKey: string | null) => {
  const matchingButton = currentLayout
    .flat()
    .find(button => pressedKey === button.label || pressedKey === button.shiftValue || pressedKey === button.symbolValue);
    
  return matchingButton;
}

export const findKeyByPressedKey = (currentLayout: IButton[][], pressedKey: string | null) => {
  for (const row of currentLayout) {
    for (const button of row) {
      if (pressedKey === button.label || pressedKey === button.shiftValue || pressedKey === button.symbolValue) {
        return pressedKey;
      }
    }
  }
}
