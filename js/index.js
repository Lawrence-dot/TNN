var toggler = document.getElementById("toggler");
let sidebar = document.getElementsByClassName("side-bar");
let theForm = document.getElementById("top-form");
let cursor = document.getElementById("cursor");
let pageContent = document.getElementById("");

toggler.onclick = function name() {
    theForm.classList.toggle("hide");
    cursor.classList.toggle("close");
    if (cursor.classList.contains("close")) {
        cursor.innerHTML = "&times;";
    } else {
        cursor.innerHTML = "&#8801;Menu";
    };
};
