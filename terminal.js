// requires a div with an id of "terminal" and the font-family to be monospace

var terminalOutput = [];

function terminal(string, colour, line, replace) {
    string = `<span style='color: ${colour}'>${string}</span><br>`
    if (line == null) {
        terminalOutput.push(string);
    } else {
        if (replace != null) {
            terminalOutput[line] = terminalOutput[line].replaceAll(replace, `</span>${string}${terminalOutput[line].toString().substring(0, terminalOutput[line].toString().search(">"))}`);
        } else {
            terminalOutput[line] = string;
        }
    }
    document.getElementById("terminal").innerHTML = terminalOutput.toString().replaceAll(",", "");
}

terminal("**** XELA TERMINAL ****");
terminal("");
terminal(window.location.href);
terminal("Lavascript", null, 2, "Javascript");
