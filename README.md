# num2fa

Convert numbers to Persian (Farsi) numbers and words. This package provides utilities to convert numbers into Persian digits, words, and ordinal words.

[![npm version](https://badge.fury.io/js/num2fa.svg)](https://badge.fury.io/js/num2fa)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Features

- Convert numbers to Persian digits (۰-۹)
- Convert numbers to Persian words (صفر، یک، دو، ...)
- Convert numbers to Persian ordinal words (اول، دوم، سوم، ...)
- Support for:
  - Negative numbers
  - Decimal numbers
  - Fractions
  - Custom separators
  - Numbers up to 999

## Installation

```bash
npm install num2fa
```

## Usage

### Converting to Persian Numbers

```typescript
import { numbers } from 'num2fa';

numbers(123); // '۱۲۳'
numbers(-45.67); // '-۴۵٫۶۷'
numbers('1/2'); // '۱/۲'

// Custom separators
numbers(123.45, { decimal_separator: ',' }); // '۱۲۳,۴۵'
numbers('1/2', { fraction_separator: '÷' }); // '۱÷۲'
```

### Converting to Persian Words

```typescript
import { words } from 'num2fa';

words(123); // 'یکصد و بیست و سه'
words(-45.67); // 'منفی چهل و پنج و شصت و هفت صدم'
words('1/2'); // 'یک دوم'

// Custom separators
words(123.45, { decimal_separator: ' ممیز ' }); // 'یکصد و بیست و سه ممیز چهل و پنج صدم'
words('1/2', { 
  fraction_separator: ' تقسیم بر ',
  ordinal_denominator: false 
}); // 'یک تقسیم بر دو'
```

### Converting to Persian Ordinal Words

```typescript
import { ordinalWords } from 'num2fa';

ordinalWords(1); // 'اول'
ordinalWords(2); // 'دوم'
ordinalWords(23); // 'بیست و سوم'
ordinalWords(-45); // 'منفی چهل و پنجم'
```

## Comprehensive Examples

### Real-World Use Cases

```typescript
import { numbers, words, ordinalWords } from 'num2fa';

// Price formatting
const price = 1234567.89;
console.log(numbers(price)); // '۱٬۲۳۴٬۵۶۷٫۸۹'
console.log(words(price)); // 'یک میلیون و دویست و سی و چهار هزار و پانصد و شصت و هفت و هشتاد و نه صدم'

// Educational content
const lesson = 12;
console.log(ordinalWords(lesson)); // 'دوازدهم'
console.log(words(lesson)); // 'دوازده'

// Fractions in recipes
const fraction = '3/4';
console.log(numbers(fraction)); // '۳/۴'
console.log(words(fraction)); // 'سه چهارم'
console.log(words(fraction, { 
  fraction_separator: ' از ',
  ordinal_denominator: false 
})); // 'سه از چهار'

// Custom formatting
const decimal = 45.67;
console.log(numbers(decimal, { 
  decimal_separator: '/',
  negative: ')',
  positive: '('
})); // '(۴۵/۶۷'

// Negative numbers
console.log(words(-42)); // 'منفی چهل و دو'
console.log(ordinalWords(-42)); // 'منفی چهل و دوم'

// Multiple options
const amount = 123.45;
console.log(words(amount, {
  decimal_separator: ' ممیز ',
  positive: 'مثبت ',
  negative: 'منفی ',
})); // 'مثبت یکصد و بیست و سه ممیز چهل و پنج صدم'

// Zero handling
console.log(numbers(0)); // '۰'
console.log(words(0)); // 'صفر'
console.log(ordinalWords(0)); // 'صفرم'

// Teen numbers (11-19)
for (let i = 11; i <= 19; i++) {
  console.log(words(i)); // 'یازده', 'دوازده', 'سیزده', ...
}

// Decimal places
console.log(words(1.1)); // 'یک و یک دهم'
console.log(words(1.01)); // 'یک و یک صدم'
console.log(words(1.001)); // 'یک و یک هزارم'
```

### React Component Example

```typescript
import React from 'react';
import { numbers, words } from 'num2fa';

interface PriceProps {
  amount: number;
  showWords?: boolean;
}

const PersianPrice: React.FC<PriceProps> = ({ amount, showWords = false }) => {
  const formattedNumber = numbers(amount, { 
    decimal_separator: '/',
    negative: '-'
  });
  
  return (
    <div className="price">
      <span className="digits">{formattedNumber} تومان</span>
      {showWords && (
        <span className="words">
          {words(amount)} تومان
        </span>
      )}
    </div>
  );
};

// Usage
function App() {
  return (
    <div>
      <PersianPrice amount={1234.56} showWords={true} />
      {/* Outputs: 
          ۱۲۳۴/۵۶ تومان
          یک هزار و دویست و سی و چهار و پنجاه و شش صدم تومان
      */}
    </div>
  );
}
```

### Express.js API Example

```typescript
import express from 'express';
import { numbers, words, ordinalWords } from 'num2fa';

const app = express();
app.use(express.json());

app.post('/convert', (req, res) => {
  const { number, type, options } = req.body;
  
  try {
    let result;
    switch (type) {
      case 'numbers':
        result = numbers(number, options);
        break;
      case 'words':
        result = words(number, options);
        break;
      case 'ordinal':
        result = ordinalWords(number, options);
        break;
      default:
        throw new Error('Invalid conversion type');
    }
    
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ 
      success: false, 
      error: error.message 
    });
  }
});

// Usage:
// POST /convert
// {
//   "number": 123.45,
//   "type": "words",
//   "options": {
//     "decimal_separator": " ممیز "
//   }
// }
```

## API

### numbers(number: number | string, options?: NumbersOptions): string

Convert numbers to Persian digits.

Options:
- `decimal_separator`: Separator for decimal numbers (default: '٫')
- `negative`: Prefix for negative numbers (default: '-')
- `positive`: Prefix for positive numbers (default: '')
- `fraction_separator`: Separator for fractions (default: '/')

### words(number: number | string, options?: WordsOptions): string

Convert numbers to Persian words.

Options:
- `decimal_separator`: Separator for decimal numbers (default: ' و ')
- `negative`: Prefix for negative numbers (default: 'منفی ')
- `positive`: Prefix for positive numbers (default: '')
- `fraction_separator`: Separator for fractions (default: ' ')
- `ordinal_denominator`: Whether to make fraction denominators ordinal (default: true)

### ordinalWords(number: number | string, options?: OrdinalWordsOptions): string

Convert numbers to Persian ordinal words.

Options:
- `negative`: Prefix for negative numbers (default: 'منفی ')
- `positive`: Prefix for positive numbers (default: '')

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details. 