import { words } from '../src/converters/words';

describe('words converter', () => {
  test('converts simple numbers', () => {
    expect(words(0)).toBe('صفر');
    expect(words(1)).toBe('یک');
    expect(words(10)).toBe('ده');
    expect(words(123)).toBe('یکصد و بیست و سه');
  });

  test('handles negative numbers', () => {
    expect(words(-123)).toBe('منفی یکصد و بیست و سه');
    expect(words('-456')).toBe('منفی چهارصد و پنجاه و شش');
  });

  test('handles decimal numbers', () => {
    expect(words(12.34)).toBe('دوازده و سی و چهار صدم');
    expect(words('45.67')).toBe('چهل و پنج و شصت و هفت صدم');
  });

  test('handles fractions', () => {
    expect(words('1/2')).toBe('یک دوم');
    expect(words('3/4')).toBe('سه چهارم');
  });

  test('custom separators', () => {
    expect(words(12.34, { decimal_separator: ' ممیز ' }))
      .toBe('دوازده ممیز سی و چهار صدم');
    expect(words('1/2', { 
      fraction_separator: ' تقسیم بر ',
      ordinal_denominator: false
    }))
      .toBe('یک تقسیم بر دو');
  });
}); 