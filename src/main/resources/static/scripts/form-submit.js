function sendData() {
    const XHR = new XMLHttpRequest();
    const FD = new FormData(form);

    XHR.addEventListener("load", function (event) {
        window.location.href = "/note/index.html";
    });


    XHR.addEventListener("error", function (event) {
        alert('Oops! Something went wrong.');
    });


    XHR.open("POST", "/note/notes");


    XHR.send(FD);
}


const form = document.querySelector("main form");


form.onsubmit = function(event){
    event.preventDefault();
    sendData();
};
