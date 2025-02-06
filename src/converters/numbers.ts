import { PERSIAN_DIGITS } from '../constants';

export interface NumbersOptions {
  decimal_separator?: string;
  negative?: string;
  fraction_separator?: string;
}

export function numbers(
  number: number | string,
  options: NumbersOptions = {}
): string {
  const {
    decimal_separator = '٫',
    negative = '-',
    fraction_separator = '/',
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
    return `${isNegative ? negative : ''}${convertToFarsi(
      numerator
    )}${fraction_separator}${convertToFarsi(denominator)}`;
  }

  // Handle decimals
  if (numStr.includes('.')) {
    const [integer, decimal] = numStr.split('.');
    return `${isNegative ? negative : ''}${convertToFarsi(
      integer
    )}${decimal_separator}${convertToFarsi(decimal)}`;
  }

  return `${isNegative ? negative : ''}${convertToFarsi(numStr)}`;
}

function convertToFarsi(numStr: string): string {
  return numStr
    .split('')
    .map((char) => PERSIAN_DIGITS[char] || char)
    .join('');
}
