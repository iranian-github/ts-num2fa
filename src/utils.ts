interface NumbersDefaults {
  decimal_separator?: string;
  negative?: string;
  positive?: string;
  fraction_separator?: string;
}

interface WordsDefaults extends NumbersDefaults {
  ordinal_denominator?: boolean;
}

let numbersDefaults: NumbersDefaults = {
  decimal_separator: '٫',
  negative: '-',
  positive: '',
  fraction_separator: '/',
};

let wordsDefaults: WordsDefaults = {
  decimal_separator: ' و ',
  negative: 'منفی ',
  positive: '',
  fraction_separator: ' ',
  ordinal_denominator: true,
};

export function change_numbers_defaults(options: NumbersDefaults): void {
  numbersDefaults = { ...numbersDefaults, ...options };
}

export function change_words_defaults(options: WordsDefaults): void {
  wordsDefaults = { ...wordsDefaults, ...options };
}

export function getNumbersDefaults(): NumbersDefaults {
  return { ...numbersDefaults };
}

export function getWordsDefaults(): WordsDefaults {
  return { ...wordsDefaults };
}
