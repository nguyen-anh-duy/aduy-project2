const numbers = document.getElementsByClassName("button");
const ketQua = document.getElementById("ketQua");
for (let number of numbers){
    number.addEventListener("click", function(){ketQua.innerHTML += this.value})
};
function equal() {
    let ket = ketQua.innerHTML
    let output = eval(ket)
    ketQua.innerHTML = output
};
function clean() {
    ketQua.innerHTML = " "
};
function undo() {
    let ket = ketQua.innerHTML
    ketQua.innerHTML = ket.substring(0,ket.length - 1)
};