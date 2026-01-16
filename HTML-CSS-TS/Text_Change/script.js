"use strict";
function change() {
    const title = document.querySelector("#title");
    const input = document.querySelector("#inputtext");
    if (input && title) {
        title.innerText = input.value;
        title.style.color = "orange";
    }
}
