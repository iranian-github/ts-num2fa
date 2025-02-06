import { ordinalWords } from '../src/converters/ordinalWords';

describe('ordinalWords converter', () => {
  test('converts simple numbers to ordinal words', () => {
    expect(ordinalWords(0)).toBe('صفرم');
    expect(ordinalWords(1)).toBe('اول');
    expect(ordinalWords(2)).toBe('دوم');
    expect(ordinalWords(3)).toBe('سوم');
    expect(ordinalWords(10)).toBe('دهم');
  });

  test('handles larger numbers', () => {
    expect(ordinalWords(23)).toBe('بیست و سوم');
    expect(ordinalWords(123)).toBe('یکصد و بیست و سوم');
  });

  test('handles negative numbers', () => {
    expect(ordinalWords(-1)).toBe('منفی اول');
    expect(ordinalWords(-23)).toBe('منفی بیست و سوم');
  });
}); 