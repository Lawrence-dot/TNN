var toggler = document.getElementById("toggler");
let sidebar = document.getElementsByClassName("side-bar");
let theForm = document.getElementById("top-form");
let cursor = document.getElementById("cursor");
let sideCol = document.getElementById("side-col");
let pageContent = document.getElementById("page-col");

toggler.onclick = function name() {
    theForm.classList.toggle("hide");
    sideCol.classList.toggle("d-block");
    cursor.classList.toggle("close");
    if (cursor.classList.contains("close")) {
        cursor.innerHTML = "&times;";
    } else {
        cursor.innerHTML = "&#8801;Menu";
    };

    pageContent.classList.toggle("hhh");

    // pageContent.style.paddingLeft = "250px";
};
