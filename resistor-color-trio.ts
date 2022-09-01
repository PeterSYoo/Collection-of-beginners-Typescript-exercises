const colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export function decodedValue(color: string) {
  const value =
    parseInt(`${colors.indexOf(color[0])}${colors.indexOf(color[1])}`) *
    10 ** colors.indexOf(color[2]);
  // Order of operations,
  // 1. Parenthesis
  // 2. Exponent: 10 to the power of index position of 3rd element in array being passed
  // 3. Parenthesis * Exponent
  return value >= 1000 ? `${value / 1000} kiloohms` : `${value} ohms`;
}
