// An isogram is a string with only unique characters.

function isIsogram(str){
    if (str.length < 1) { return true }
    str = str.toLowerCase();
    const letters = str.split('');
    const count = letters.reduce( (y, x) => {
      y[x] = (y[x] || 0) + 1
      return y
    }, {});
    for (const [key, value] of Object.entries(count)) {
      if(value > 1) {return false}
    }
    return true
  }