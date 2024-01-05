import { Language } from '../constants';

interface IActionButtonLabel {
  en: string;
  ka: string;
  ru: string;
}

export const deleteLabel = {
  en: 'Delete',
  ka: 'წაშლა',
  ru: 'Удалить',
}

export const cleanLabel = {
  en: 'Clean',
  ka: 'გაწმენდა',
  ru: 'Очистить',
}

export const languageLabel = {
  en: 'Eng',
  ka: 'ქარ',
  ru: 'Рус',
}

export const getLabel = (label: IActionButtonLabel, selectedLanguage: Language) => {
  return label[selectedLanguage];
}
