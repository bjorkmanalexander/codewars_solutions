// A 'Jaden Case'-string is typed by capitalizing the first letter of every word.
// Function is applied on a string-variable such as the 'toString()'-method.

String.prototype.toJadenCase = function () {
  const jadenWords = [];
  const words = this.split(' ');
  for (let i = 0; i < words.length; ++i) {
    const word = words [i];
    jadenWords.push(`${word[0].toUpperCase() + word.slice(1)}`);
  }
  return jadenWords.join(' ');
};