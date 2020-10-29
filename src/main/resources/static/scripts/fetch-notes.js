fetchData();
function fetchData(page = 0) {
    fetch("/note/notes/")
        .then(response => response.json())
        .then(resultDisplay)
        .catch(console.log);
}



