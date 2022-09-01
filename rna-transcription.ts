export function toRna(dna: string) {
  const split = dna.toUpperCase().split('');
  const rnaArr: string[] = [];

  if (dna.includes('XXX')) {
    throw 'Invalid input DNA.';
  } else if (dna.includes('U')) {
    throw 'Invalid input DNA.';
  }

  for (let key in split) {
    if (split[key] === 'C') {
      rnaArr.push('G');
    } else if (split[key] === 'G') {
      rnaArr.push('C');
    } else if (split[key] === 'A') {
      rnaArr.push('U');
    } else if (split[key] === 'T') {
      rnaArr.push('A');
    }
  }
  const joined = rnaArr.toString().toUpperCase().replaceAll(',', '');
  return joined;
}
