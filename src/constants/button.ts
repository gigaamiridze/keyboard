import { IActionProps } from '../models';

export const qwertyActions: IActionProps = {
  hasShift: true,
  hasSymbol: true,
  hasLanguage: true,
  hasSpace: true,
  hasClean: true,
  hasDelete: true,
  hasDot: false,
}

export const numericActions: IActionProps = {
  hasShift: false,
  hasSymbol: false,
  hasLanguage: false,
  hasSpace: false,
  hasClean: false,
  hasDelete: true,
  hasDot: false,
}

export const numericDotActions: IActionProps = {
  ...numericActions,
  hasDot: true,
}

export const disabledActions: IActionProps = {
  hasShift: false,
  hasSymbol: false,
  hasLanguage: false,
  hasSpace: false,
  hasClean: false,
  hasDelete: false,
  hasDot: false,
}
