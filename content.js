// kad se ucita stranica
function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

// addEventListener(e, getSelectionText)


let text = "";
window.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    if (this.window.getSelection) {
        text = this.window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text);
}, false);

console.log(text);