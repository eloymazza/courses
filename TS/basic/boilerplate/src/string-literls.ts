type CSSValue = number | `${number}px` | `${number}em` | `${number}rem`;

function size(input: CSSValue) {
  if (typeof input === 'number') {
    return `${input}px`;
  }

  return input;
}

size(10); // '10px'
size('10px'); // '10px'
//size('10'); // 'error'
size('10em'); // '10em'
size('10rem'); // '10rem'
//size('10ex'); // Argument of type '"10%"' is not assignable to parameter of type 'CSSValue'.
