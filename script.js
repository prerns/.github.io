let buttonDark = document.querySelector(".button-dark");
let buttonLight = document.querySelector(".button-light");


buttonDark.addEventListener("click", changeColorDark);
buttonLight.addEventListener("click", changeColorLight);

function changeColorDark() {
    document.body.style.backgroundColor = "rgb(173,173,173)";
  }

function changeColorLight() {
    document.body.style.backgroundColor = "rgb(157,199,201)";
}

 