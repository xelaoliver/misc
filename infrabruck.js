function brackets(code) {
  var brackets = [];
  var open = 0;

  for (let index = 0; index < code.length; index++) {
    if (code[index] === "[") {
      var bracketsIndex = index;
      open = 1;

      while (open > 0 && bracketsIndex < code.length) {
        bracketsIndex++;
        
        if (code[bracketsIndex] === "[") {
          open ++;
        } else if (code[bracketsIndex] === "]") {
          open --;
        }
      }

      if (open === 0) {
        brackets.push(index, bracketsIndex);
      }
    }
  }
  return brackets;
}

brackets = brackets("x[xx[x]x]xx");
console.log(brackets);
