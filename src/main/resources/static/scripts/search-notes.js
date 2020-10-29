const search = document.querySelector("#search");
search.onsubmit = function(event){
    event.preventDefault();
    searchNote();
};
function searchNote() {
    fetch("/note/notes/search",{method:"POST", body: new FormData(search)})
        .then(request => request.json())
        .then(resultDisplay);
}

function resultDisplay(result) {



    if (result.length === 0){
        return;
    }
    const main = document.querySelector("main");
    main.innerHTML = "";
    const ul = document.createElement("ul");
    ul.setAttribute("class","notes");
    main.appendChild(ul);
    initDelete();
    for (const note of result){
        console.log(note);
        const li = document.createElement("li");
        const button = document.createElement("button");
        const i = document.createElement("i");
        const a = document.createElement("a");
        const h2 = document.createElement("h2");
        const article = document.createElement("article");
        const extraUl = document.createElement("ul");
        const extraLi = document.createElement("li");
        const b = document.createElement("b");
        const time = document.createElement("time");

        i.setAttribute("class","far fa-trash-alt");
        button.setAttribute("type","button");
        button.setAttribute("value",note["id"]);
        article.setAttribute("class","trix-content");

        a.href = "./update.html?id="+ note["id"];
        h2.textContent = note["title"];
        article.innerHTML = note["content"];
        b.textContent = "编辑于：";
        time.dateTime = note["date"];
        console.log(note["date"]);
        time.textContent = note["date"].replace("T", " ").replace(/\.\d*/,"");

        extraLi.appendChild(b);
        extraLi.appendChild(time);
        extraUl.appendChild(extraLi);
        a.appendChild(h2);
        a.appendChild(article);
        a.appendChild(extraUl);
        button.appendChild(i);


        li.appendChild(button)
        li.appendChild(a);
        ul.appendChild(li);
    }
}



function initDelete() {
    const ul = document.querySelector("main ul");
    ul.addEventListener("click",function (e) {
        if (e.target.tagName.toLowerCase() === "button" ){
            deleteNote(e.target)
        }
        if (e.target.tagName.toLowerCase() === "i" ){
            deleteNote(e.target.parentNode);
        }
    });
}

function deleteNote(button) {
    fetch("/note/notes/"+button.value,{method:"DELETE"})
        .then(response => response.json())
        .then(result => {
            if (result === true){
                button.parentNode.remove();
            } else {
                alert("删除失败");
            }
        })
        .catch(console.log);
}




