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

function arithmatic(brackets, code) {
  var pointer = 0;
  var cells = new Array(64).fill(0);
  var index = 0;

  while (index < code.length) {
    if (code[index] === ">") {
      pointer++;
    } else if (code[index] === "<") {
      pointer--;
    } else if (code[index] === "+") {
      cells[pointer] = (cells[pointer] + 1) % 256; // Wrap around at 256
    } else if (code[index] === "-") {
      cells[pointer] = (cells[pointer] - 1 + 256) % 256; // Wrap around at 256
    } else if (code[index] === "[") {
      if (cells[pointer] === 0) {
        index = brackets[brackets.indexOf(index) + 1]; // Jump to the matching closing bracket
      }
    } else if (code[index] === "]") {
      if (cells[pointer] !== 0) {
        index = brackets[brackets.indexOf(index) - 1]; // Jump back to the matching opening bracket
      }
    } else if (code[index] == ".") {
      output.push(String.fromCharCode(cells[pointer]));
    }
    index++;
  }
  return cells;
}

let code = "+++++++++++++[>+++++<-]>.";

var brackets = brackets(code);

var output = [];
var cells = arithmatic(brackets, code);
document.write("code: "+code+"<br><br>"+"cells: "+cells+"<br><br>"+"out: "+output);
