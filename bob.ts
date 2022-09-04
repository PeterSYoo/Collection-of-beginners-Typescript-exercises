export function hey(message: string): string {
  const removeWhiteSpace = message.replaceAll(' ', '');

  if (
    message === message.toUpperCase() &&
    message.endsWith('?') &&
    !/\d/.test(message)
  ) {
    return `Calm down, I know what I'm doing!`;
  } else if (
    removeWhiteSpace === removeWhiteSpace.toUpperCase() &&
    removeWhiteSpace.length != 0 &&
    /[a-zA-Z]/.test(removeWhiteSpace)
  ) {
    return 'Whoa, chill out!';
  } else if (message.trim().endsWith('?')) {
    return 'Sure.';
  } else if (message === '' || /^\s+$/.test(message)) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
}

// Ask a question? -> 'Sure'
// ALL CAPITALS -> 'Whoa, chill out!'
// YELL A QUESTION? -> 'Calm down, I know what I'm doing!'
// Gibberish -> 'Fine. Be that way!'
// else -> 'Whatever'
