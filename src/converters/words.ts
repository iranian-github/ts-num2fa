import { ONES, TENS, HUNDREDS, DECIMAL_PLACES, TEENS } from '../constants';

export interface WordsOptions {
  decimal_separator?: string;
  negative?: string;
  fraction_separator?: string;
  ordinal_denominator?: boolean;
}

export function words(
  number: number | string,
  options: WordsOptions = {}
): string {
  const {
    decimal_separator = ' و ',
    negative = 'منفی ',
    fraction_separator = ' ',
    ordinal_denominator = true,
  } = options;

  let numStr = number.toString();

  // Handle negative numbers
  const isNegative = numStr.startsWith('-');
  if (isNegative) {
    numStr = numStr.slice(1);
  }

  // Handle fractions
  if (numStr.includes('/')) {
    const [numerator, denominator] = numStr.split('/');
    return `${isNegative ? negative : ''}${convertToWords(
      parseInt(numerator)
    )}${fraction_separator}${convertToWords(
      parseInt(denominator),
      ordinal_denominator
    )}`;
  }

  // Handle decimals
  if (numStr.includes('.')) {
    const [integer, decimal] = numStr.split('.');
    return `${isNegative ? negative : ''}${convertToWords(
      parseInt(integer)
    )}${decimal_separator}${handleDecimalPart(decimal)}`;
  }

  return `${isNegative ? negative : ''}${convertToWords(parseInt(numStr))}`;
}

function convertToWords(num: number, makeOrdinal = false): string {
  if (num === 0) return 'صفر';

  const parts: string[] = [];
  let remaining = num;

  // Handle hundreds
  const hundred = Math.floor(remaining / 100);
  if (hundred > 0) {
    parts.push(HUNDREDS[hundred]);
    remaining %= 100;
  }

  // Handle tens and teens
  if (remaining >= 10 && remaining < 20) {
    // Handle teen numbers (10-19)
    parts.push(TEENS[remaining - 10]);
    remaining = 0;
  } else {
    // Handle other tens (20-90)
    const ten = Math.floor(remaining / 10);
    if (ten > 0) {
      parts.push(TENS[ten]);
      remaining %= 10;
    }
  }

  // Handle ones
  if (remaining > 0) {
    const word = ONES[remaining];
    parts.push(makeOrdinal && parts.length === 0 ? word + 'م' : word);
  } else if (makeOrdinal && parts.length > 0) {
    parts[parts.length - 1] += 'م';
  }

  return parts.join(' و ');
}

function handleDecimalPart(decimal: string): string {
  const num = parseInt(decimal);
  const place = decimal.length;
  return `${convertToWords(num)} ${DECIMAL_PLACES[place]}`;
}
