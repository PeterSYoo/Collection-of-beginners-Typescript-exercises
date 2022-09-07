function count(word: string): object {
  const newWords: any = word
    .trim()
    .toLowerCase()
    .split(/[\t, \s, \n,]+/);
  const map: { [key: string]: any } = new Map();

  newWords.forEach((elem: string) => {
    map.set(elem, 1 + (map.get(elem) || 0));
  });

  return map;
}

console.log(count('count one word counts'));
