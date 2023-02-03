var gui = require('nw.gui');
var win = gui.Window.get();
win.minimize();





function CloseWindow() {
    window.close(true)
}

function MaximizeWindow() {
    win.minimize()
}

function ClearAnswer() {
    document.getElementById("AnswerInput").value = "";
}

