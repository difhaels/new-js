const text = document.querySelector("#text");
const tomb = document.querySelector("#tomb");
let bo = true;
tomb.addEventListener("click", () => {
    bo === true? "text muncul karena tombol dipencet" : "kosong";
});