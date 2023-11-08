import { Language } from '../constants';

interface IActionButtonLabel {
  en: string;
  ka: string;
}

export const deleteLabel = {
  en: 'Delete',
  ka: 'წაშლა',
}

export const cleanLabel = {
  en: 'Clean',
  ka: 'გაწმენდა',
}

export const languageLabel = {
  en: 'Eng',
  ka: 'ქარ',
}


export const getLabel = (label: IActionButtonLabel, selectedLanguage: Language) => {
  return label[selectedLanguage];
}
