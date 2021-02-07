function spinWords(string){
    const newWords = [];
    const words = string.split(' ');
    for (let i = 0; i < words.length; ++i) {
      if (words[i].length < 5) {
        newWords.push(words[i]);
      } else {
        const word = words[i].split('').reverse().join('');
        newWords.push(word);
      }
    }
    return newWords.join(' ');
  }