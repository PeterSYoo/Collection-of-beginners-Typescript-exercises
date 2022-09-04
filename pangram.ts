export function isPangram(text: string) {
  const newString = text.toLocaleLowerCase().replaceAll(' ', '').split('');
  const uniqueString = [...new Set(newString)];
  const result = uniqueString.sort().join('');

  if (result.includes('abcdefghijklmnopqrstuvwxyz')) {
    return true;
  } else {
    return false;
  }
}
