
const monthsEn = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const monthsRu = [
  'ЯНВ',
  'ФЕВ',
  'МАР',
  'АПР',
  'МАЙ',
  'ИЮН',
  'ИЮЛ',
  'АВГ',
  'СЕН',
  'ОКТ',
  'НОЯ',
  'ДЕК',
]

export function getMonthName(month) {
  // lover case for safari cases in iOS < v10.2
  const userLang = (navigator.language || navigator.userLanguage).toLowerCase();
  if (userLang === 'ru' || userLang === 'ru-ru') {
    return monthsRu[month-1];
  }
  return monthsEn[month-1];
}