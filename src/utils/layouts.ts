import { Language } from '../constants';
import keys from './keys';

export const getLayoutByLanguage = (language: Language) => {
  switch (language) {
    case Language.EN:
      return englishLayout;
    case Language.KA:
      return georgianLayout;
    case Language.RU:
      return russianLayout;
  }
}

export const englishLayout = [
  [keys.enQ, keys.enW, keys.enE, keys.enR, keys.enT, keys.enY, keys.enU, keys.enI, keys.enO, keys.enP],
  [keys.enA, keys.enS, keys.enD, keys.enF, keys.enG, keys.enH, keys.enJ, keys.enK, keys.enL],
  [keys.enZ, keys.enX, keys.enC, keys.enV, keys.enB, keys.enN, keys.enM]
]

export const georgianLayout = [
  [keys.geQ, keys.geW, keys.geE, keys.geR, keys.geT, keys.geY, keys.geU, keys.geI, keys.geO, keys.geP],
  [keys.geA, keys.geS, keys.geD, keys.geF, keys.geG, keys.geH, keys.geJ, keys.geK, keys.geL],
  [keys.geZ, keys.geX, keys.geC, keys.geV, keys.geB, keys.geN, keys.geM]
]

export const russianLayout = [
  [keys.ruYa, keys.ruV, keys.ruE, keys.ruR, keys.ruT, keys.ruY, keys.ruU, keys.ruI, keys.ruO, keys.ruP],
  [keys.ruA, keys.ruS, keys.ruD, keys.ruF, keys.ruG, keys.ruH, keys.ruJ, keys.ruK, keys.ruL],
  [keys.ruZ, keys.ruX, keys.ruC, keys.ruV1, keys.ruB, keys.ruN, keys.ruM]
]

export const numericLayout = [
  [keys.one, keys.two, keys.three],
  [keys.four, keys.five, keys.six],
  [keys.seven, keys.eight, keys.nine],
  [keys.dot, keys.zero]
]

export const numpadLayout = [
  [keys.one, keys.two, keys.three],
  [keys.four, keys.five, keys.six],
  [keys.seven, keys.eight, keys.nine],
  [keys.zero]
]
