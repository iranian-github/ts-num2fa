import { ONES, TENS, HUNDREDS, ORDINAL_ONES, TEENS } from '../constants';

export interface OrdinalWordsOptions {
  negative?: string;
}

export function ordinalWords(
  number: number | string,
  options: OrdinalWordsOptions = {}
): string {
  const { negative = 'منفی ' } = options;

  let numStr = number.toString();

  // Handle negative numbers
  const isNegative = numStr.startsWith('-');
  if (isNegative) {
    numStr = numStr.slice(1);
  }

  const num = parseInt(numStr);
  return `${isNegative ? negative : ''}${convertToOrdinalWords(num)}`;
}

function convertToOrdinalWords(num: number): string {
  if (num === 0) return 'صفرم';

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
    parts.push(TEENS[remaining - 10] + 'م');
    return parts.join(' و ');
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
    // Use ordinal form for the last number
    if (parts.length === 0) {
      parts.push(ORDINAL_ONES[remaining]);
    } else {
      parts.push(ORDINAL_ONES[remaining] || ONES[remaining] + 'م');
    }
  } else if (parts.length > 0) {
    // Add 'م' to the last part if no ones digit
    parts[parts.length - 1] += 'م';
  }

  return parts.join(' و ');
}
