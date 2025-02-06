import { numbers } from '../src/converters/numbers';

describe('numbers converter', () => {
  test('converts simple numbers', () => {
    expect(numbers(123)).toBe('۱۲۳');
    expect(numbers('456')).toBe('۴۵۶');
  });

  test('handles negative numbers', () => {
    expect(numbers(-123)).toBe('-۱۲۳');
    expect(numbers('-456')).toBe('-۴۵۶');
  });

  test('handles decimal numbers', () => {
    expect(numbers(12.34)).toBe('۱۲٫۳۴');
    expect(numbers('45.67')).toBe('۴۵٫۶۷');
  });

  test('handles fractions', () => {
    expect(numbers('1/2')).toBe('۱/۲');
    expect(numbers('3/4')).toBe('۳/۴');
  });

  test('custom separators', () => {
    expect(numbers(12.34, { decimal_separator: '/' })).toBe('۱۲/۳۴');
    expect(numbers('1/2', { fraction_separator: ' بر ' })).toBe('۱ بر ۲');
  });
}); 