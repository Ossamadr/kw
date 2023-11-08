let ku = document.getElementById("inpKu");
let us = document.getElementById("inpUs");
let ur = document.getElementById("inpUr");
let dz = document.getElementById("inpDz");
let btn = document.getElementById("btn");

btn.onclick = function () {
    if (ku.value != "") {
        us.value = ku.value * 3.27;
        ur.value = ku.value * 3.03;
        dz.value = ku.value * 435.80;
    }
}
