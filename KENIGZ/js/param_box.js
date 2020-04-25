let paramBox = document.getElementById("paramentres_Box-wrapper");
let btnToParamBox = document.getElementById("ctg-btn-param");

function showParamBox() {
    paramBox.style.maxHeight = '2000px';
    paramBox.style.marginTop = '60px';
}

btnToParamBox.addEventListener("click", showParamBox);
