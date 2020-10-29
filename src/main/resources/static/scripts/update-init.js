const id = new URLSearchParams(window.location.search).get("id");
console.log(id);
fetch("/note/notes/"+id)
    .then(response => response.json())
    .then(result => {
        initUpdateForm(result);
    })
    .catch(console.log);
function initUpdateForm(result) {
    document.querySelector("#id").value = result["id"];
    document.querySelector("#title").value = result["title"];
    const editor = document.querySelector("trix-editor").editor;
    editor.setSelectedRange([0, 0]);
    editor.insertHTML(result["content"]);


}