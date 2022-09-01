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
  return parseInt(`${colors.indexOf(color[0])}${colors.indexOf(color[1])}`);
}
// brown + green = 15
// Create a program so you don't have to remember the values of the bands
