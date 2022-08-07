
let textArea = document.getElementById("editorbox");
let previewArea = document.getElementById("output");

function onCodeChange() {
    console.log(textArea.value);
    previewArea.innerHTML = textArea.value;

}
