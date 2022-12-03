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

let text = "";
window.addEventListener('keydown', function (ev) {
    if (ev.ctrlKey && ev.shiftKey && ev.altKey) {
        // ev.preventDefault();
        if (this.window.getSelection) {
            text = this.window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        console.log(text);
    }
}, false);
